// Write a program to create a graph and perform the
// following operations:
// a)Add Vertex
// b)Add edge c)Display

class Graph {
    constructor() {
        this.adjancylist = {};
    }
    addVertex(vertex) {
        if (!this.adjancylist[vertex]) {
            this.adjancylist[vertex] = new Set();
        }
    }
    addEdge(vertex1, vertex2) {
        if (!this.adjancylist[vertex1]) {
            this.addVertex(vertex1);
        }
        if (!this.adjancylist[vertex2]) {
            this.addVertex(vertex2);
        }
        this.adjancylist[vertex1].add(vertex2);
        this.adjancylist[vertex2].add(vertex1);
    }
    display() {
        for (let vertex in this.adjancylist) {
            console.log(vertex + "->" + [... this.adjancylist[vertex]]);
        }
    }
}
const g = new Graph();
g.addVertex(10);
g.addVertex(20);
g.addVertex(30);
g.addVertex(40);
g.addEdge(10, 20);
g.addEdge(30, 40);
g.display();
console.log(g)