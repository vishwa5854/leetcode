const shortestPath = (edges, nodeA, nodeB) => {
    let graph = convertToAdjacencyList(edges);
    const visited = new Set([nodeA]);
    let queue = [[nodeA, 0]];

    while (queue.length > 0) {
        let curr = queue.shift();

        if (curr[0] === nodeB) return curr[1];
        graph[curr[0]].forEach(c => {
            if (!visited.has(c)) {
                queue.push([c, curr[1] + 1]); 
                visited.add(c);
            } 
        });
    }

    return -1;
};

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