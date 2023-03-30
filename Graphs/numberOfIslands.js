const islandCount = (grid) => {
    let visited = initialiseVisited(grid);
    let count = grid.length * grid[0].length;

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (!visited[i][j] && grid[i][j] === "L") {
                count = Math.min(explore(grid, visited, i, j), count)
            }
        }
    }
    return count;
};

const initialiseVisited = (grid) => {
    let visited = [];

    grid.forEach(c => {
        let temp = [];
        c.forEach(sc => temp.push(false))
        visited.push(temp);
    });
    return visited;
};

const explore = (grid, visited, one, two) => {
    if (visited[one][two]) return 0;
    let queue = [[one, two]];
    let size = 0;
    
    while (queue.length > 0) {
        let [i, j] = queue.shift();
        size += 1;
        visited[i][j] = true;

        if (((i - 1) > 0) && (grid[i - 1][j] !== "W") && !visited[i - 1][j]) queue.push([i - 1, j]);
        if (((i + 1) < grid.length) && (grid[i + 1][j] !== "W") && !visited[i + 1][j]) queue.push([i + 1, j]);
        if (((j - 1) > 0) && (grid[i][j - 1] !== "W") && !visited[i][j - 1]) queue.push([i, j - 1]);
        if (((j + 1) < grid[0].length) && (grid[i][j + 1] !== "W") && !visited[i][j + 1]) queue.push([i, j + 1]);
    }
    return size;
};
const grid = [
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'W', 'W', 'L', 'W'],
    ['W', 'W', 'L', 'L', 'W'],
    ['L', 'W', 'W', 'L', 'L'],
    ['L', 'L', 'W', 'W', 'W'],
];

console.log(islandCount(grid)); // -> 3