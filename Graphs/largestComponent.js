const largestComponent = (graph) => {
    let visited = new Set();
    let ans = 0;

    for (let node in graph) {
        let count = explore(graph, node, visited);
        console.log(count);
        ans = Math.max(ans, count);
    }
    return ans + 1;
};

const explore = (graph, curr, visited) => {
    if (visited.has(String(curr))) return 0;

    let count = 1;
    visited.add(String(curr));

    graph[curr].forEach(e => { count+= explore(graph, e, visited); });

    return count;
}

console.log(largestComponent({
    0: ['8', '1', '5'],
    1: ['0'],
    5: ['0', '8'],
    8: ['0', '5'],
    2: ['3', '4'],
    3: ['2', '4'],
    4: ['3', '2']
}));