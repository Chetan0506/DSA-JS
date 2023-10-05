class Graph {
    constructor(v) {
        this.v = v;
        this.adj = new Array(v);
        for (let i = 0; i < v; i++) {
            this.adj[i] = [];
        }
    }
    addEdge(v, w) {
        this.adj[v].push(w);
    }
    BFS(s) {
        let visited = new Array(this.v);
        for (let i = 0; i < this.v; i++) {
            visited[i] = false;
        }
        let queue = [];
        visited[s] = true;
        queue.push(s);

        while (queue.length > 0) {
            s = queue[0];
            console.log(s + " ");
            queue.shift();

            this.adj[s].forEach((adjacent, i) => {
                if (!visited[adjacent]) {
                    visited[adjacent] = true;
                    queue.push(adjacent);
                }
            });
        }
    }
}
g = new Graph(4);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 2);
g.addEdge(2, 0);
g.addEdge(2, 3);
g.addEdge(3, 3);
console.log(
    "Following is Breadth First Traversal " + "(starting from vertex 2)<br>"
);
g.BFS(2);