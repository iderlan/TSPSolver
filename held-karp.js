function heldKarp(cities) {
    const n = cities.length;
    const dp = Array.from({ length: 1 << n }, () => Array(n).fill(Infinity));
    dp[1][0] = 0;  // Começa na primeira cidade

    for (let mask = 1; mask < (1 << n); mask += 2) {
        for (let u = 0; u < n; u++) {
            if ((mask & (1 << u)) === 0) continue;
            for (let v = 0; v < n; v++) {
                if ((mask & (1 << v)) !== 0 || v === u) continue;
                const newMask = mask | (1 << v);
                dp[newMask][v] = Math.min(dp[newMask][v], dp[mask][u] + distance(cities[u], cities[v]));
            }
        }
    }

    let minCost = Infinity;
    let lastCity = -1;
    for (let u = 1; u < n; u++) {
        const cost = dp[(1 << n) - 1][u] + distance(cities[u], cities[0]);
        if (cost < minCost) {
            minCost = cost;
            lastCity = u;
        }
    }

    // Reconstrói o caminho ótimo
    let bestPath = [0];
    let currentMask = (1 << n) - 1;
    let currentCity = lastCity;

    for (let i = 1; i < n; i++) {
        bestPath.push(currentCity);
        let found = false;

        for (let u = 0; u < n; u++) {
            if ((currentMask & (1 << u)) === 0 || u === currentCity) continue;

            const prevMask = currentMask ^ (1 << currentCity);
            if (prevMask in dp && dp[prevMask][u] + distance(cities[u], cities[currentCity]) === dp[currentMask][currentCity]) {
                currentCity = u;
                currentMask = prevMask;
                found = true;
                break;
            }
        }

        if (!found) break;
    }

    bestPath.reverse();

    return {
        minCost,
        bestPath
    };
}

function distance(city1, city2) {
    const dx = city1.x - city2.x;
    const dy = city1.y - city2.y;
    return Math.sqrt(dx * dx + dy * dy);
}
