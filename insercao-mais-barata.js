// insercao-mais-barata.js

function cheapestInsertionHeuristic(cities) {
    const path = [0];  // Começa com a primeira cidade no caminho
    const unvisited = cities.map((_, index) => index).slice(1);  // Lista das cidades não visitadas

    let nextCity = unvisited.reduce((closest, cityIndex) => {
        const dist = distance(cities[0], cities[cityIndex]);
        return dist < distance(cities[0], cities[closest]) ? cityIndex : closest;
    }, unvisited[0]);
    path.push(nextCity);
    unvisited.splice(unvisited.indexOf(nextCity), 1);

    while (unvisited.length > 0) {
        let bestInsertion = { city: null, cost: Infinity, position: null };

        unvisited.forEach(city => {
            for (let i = 0; i < path.length; i++) {
                const cost = insertionCost(cities, path, i, city);
                if (cost < bestInsertion.cost) {
                    bestInsertion = { city, cost, position: i + 1 };
                }
            }
        });

        path.splice(bestInsertion.position, 0, bestInsertion.city);
        unvisited.splice(unvisited.indexOf(bestInsertion.city), 1);
    }

    return { bestPath: path, minCost: calculateTotalCost(cities, path) };
}

function distance(city1, city2) {
    const dx = city2.x - city1.x;
    const dy = city2.y - city1.y;
    return Math.sqrt(dx * dx + dy * dy);
}

function insertionCost(cities, path, position, newCityIndex) {
    const cityA = cities[path[position % path.length]];
    const cityB = cities[path[(position + 1) % path.length]];
    const cityNew = cities[newCityIndex];
    return distance(cityA, cityNew) + distance(cityNew, cityB) - distance(cityA, cityB);
}

function calculateTotalCost(cities, path) {
    let totalCost = 0;
    for (let i = 0; i < path.length; i++) {
        const city1 = cities[path[i]];
        const city2 = cities[path[(i + 1) % path.length]];
        totalCost += distance(city1, city2);
    }
    return totalCost;
}
