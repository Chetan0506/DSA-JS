class Graph {
    constructor() {
        this.adjancencyList = {};
    }
    addVertex(vertex) {
        if (!this.adjancencyList[vertex]) {
            this.adjancencyList[vertex] = new Set();
        }
    }

    addEdge(vertex1, vertex2) {
        if (!this.adjancencyList[vertex1]) {
            this.addVertex(vertex1);
        }

        if (!this.adjancencyList[vertex2]) {
            this.addVertex(vertex2);
        }
        this.adjancencyList[vertex1].add(vertex2);
        this.adjancencyList[vertex2].add(vertex1);
    }

    hasEdge(vertex1, vertex2) {
        return this.adjancencyList[vertex1].has(vertex2) && this.adjancencyList[vertex2].has(vertex1);
    }

    removeEdge(vertex1, vertex2) {
        this.adjancencyList[vertex1].delete(vertex2);
        this.adjancencyList[vertex2].delete(vertex1);
    }

    display() {
        for (let vert in this.adjancencyList) {
            console.log(vert + "-->" + [...this.adjancencyList[vert]]);
        }
    }
}
const g = new Graph();

g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');

g.addEdge('A', 'B');
g.addEdge('C', 'A');
g.addEdge('B', 'C');
g.addEdge('C', 'B');
g.addEdge('D', 'A');
g.addEdge('C', 'A');

g.removeEdge('A','B');
g.removeEdge('D','B');

console.log("\nEdges Between Vertices : ");
g.display();

console.log("Edge between these vertices or not : \n");
console.log("A-B: " +g.hasEdge('A','B'));
console.log("D-B: " +g.hasEdge('D','B'));
console.log("B-C: " +g.hasEdge('B','C'));
console.log("C-B: " +g.hasEdge('C','B'));