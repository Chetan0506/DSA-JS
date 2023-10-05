class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class stack {
    constructor(data) {
        const newNode = new Node(data);
        this.top = newNode;
        this.length = 1;
    }
    push(data) {
        const newNode = new Node(data);
        if (!this.length) {
            this.top = newNode;
        } else {
            newNode.next = this.top;
            this.top = newNode;
        }
        this.length++;
        return this;
    }
    pop() {
        let temp = this.top;
        if (!this.length) {
            return undefined;
        } else {
            temp = this.top;
            this.top = temp.next;
            temp.next = null;
        }
        this.length--;
        return temp;
    }

    isEmpty() {
        return this.top.length == 0;
    }
    peek() {
        return this.top;
    }
}
const ns = new stack(10);
ns.push(20);
ns.push(30);
console.log(ns);
ns.pop();
ns.pop();
console.log(ns);
ns.isEmpty();
ns.peek();
console.log(ns);