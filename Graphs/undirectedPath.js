const edges = [
    ['i', 'j'],
    ['k', 'i'],
    ['m', 'k'],
    ['k', 'l'],
    ['o', 'n']
];

const convertToAdjacencyList = (edges) => {
    let ans = {};

    edges.forEach(edge => {
        if (!ans.hasOwnProperty(edge[0])) ans[edge[0]] = [];

        if (!ans.hasOwnProperty(edge[1])) ans[edge[1]] = [];
        ans[edge[0]].push(edge[1]);
        ans[edge[1]].push(edge[0]);
    });
    return ans;
};

const graph = convertToAdjacencyList(edges);

const hasPath = (graph, src, dest, visited) => {
    if (visited.has(src)) return false;

    if (src === dest) return true;

    visited.add(src);

    for (let n of graph[src]) {
        if (hasPath(graph, n, dest, visited)) return true;
    }
    return false;
};