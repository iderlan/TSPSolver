// vizinho-mais-proximo.js

function nearestNeighbor(cities) {
    const path = [0];  // Começa com a primeira cidade no caminho
    const unvisited = cities.map((_, index) => index).slice(1);  // Lista das cidades não visitadas

    while (unvisited.length > 0) {
        const currentCity = cities[path[path.length - 1]];
        let nearestCity = unvisited[0];
        let shortestDistance = distance(currentCity, cities[nearestCity]);

        unvisited.forEach(city => {
            const dist = distance(currentCity, cities[city]);
            if (dist < shortestDistance) {
                nearestCity = city;
                shortestDistance = dist;
            }
        });

        path.push(nearestCity);
        unvisited.splice(unvisited.indexOf(nearestCity), 1);
    }

    return { bestPath: path, minCost: calculateTotalCost(cities, path) };
}
