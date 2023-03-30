const graph = {
    f: ['g', 'i'],
    g: ['h'],
    h: [],
    i: ['g', 'k'],
    j: ['i'],
    k: []
};

/**
 * Graph given will be directed and acyclic
 * Given a source and destination find if a path exists
 * n = # nodes
 * e = #edges
 * Time: O(e), Space: O(n)
 */

// this is a dfs
const hasPath = (graph, src, dest) => {
    if (src === dest) return true;

    for (let e of graph[src]) {
        if (hasPath(graph, e, dest)) return true;
    }
    return false;
};

const hasPathBfs = (graph, src, dest) => {
    let queue = [ src ];

    while (queue.length !== 0) {
        let curr = queue.shift();

        if (curr === dest) return true;
        graph[curr].forEach(e => queue.push(e));
    }
    return false;
}; 