/*
9).Write a program to create a graph and perform the following operations: a)Delete vertex b)Delete edge
*/
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
console.log("\nEdges Between Vertices : ");
g.display();
console.log(g);
g.removeEdge('A', 'B');
g.removeEdge('D', 'A');
console.log("\nVertices after deleting Edges : ");
g.display();
console.log(g);