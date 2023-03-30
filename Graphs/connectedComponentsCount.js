const connectedComponentsCount = (graph) => {
    let visited = new Set();
    let count = 0;

    for (let node in graph) {
        if (explore(graph, node, visited)) count += 1;
    }
    return count;
};

const explore = (graph, curr, visited) => {
    if (visited.has(String(curr))) return false;

    visited.add(String(curr));

    graph[curr].forEach(e => explore(graph, e, visited));

    return true;
};
