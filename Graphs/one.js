// This is a JS start file for my graphs stuff
// graphs = nodes + edges
// we will use adjacency list for traversing through stuff

/**
 * Traversals - DFS - Depth First Traversal -- Uses a stack
 * BFS - Breadth First Traversal -- Uses a queue
 */


const dfs = (graph, source) => {
    const stack = [ source ]; // initialising with the source node

    while (stack.length > 0) {
        let element = stack.pop();
        console.log(element);
        graph[element].forEach(e => stack.push(e));
    }
};

const dfsRecursive = (graph, source) => {
    console.log(source);
    graph[source].forEach(e => dfsRecursive(graph, e));
};

/** Typically we write iterative code, due to its behaviour
 * literally same code like dfs, instead of pop, we are going to shift it
 */
const bfs = (graph, source) => {
    let queue = [ source ];

    while (queue.length > 0) {
        let current = queue.shift();
        console.log(current);
        graph[current].forEach(e => queue.push(e));
    }
};

const graph = {
    a: ['c', 'b'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
};

// dfs(graph, 'a'); // abdfce
// dfsRecursive(graph, 'a');
bfs(graph, "a"); // acbedf