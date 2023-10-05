class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class queue {
    constructor(data) {
        const newNode = new Node(data);
        this.front = newNode;
        this.rear = this.front;
        this.length = 1;
    }
    enqueue(data) {
        const newNode = new Node(data);
        if (!this.length) {
            this.front = newNode;
            this.rear = newNode;
            this.length = 1;
        } else {
            this.rear.next = newNode;
            this.rear = newNode;
        }
        this.length++;
        return this;
    }
    dequeue() {
        let temp = this.front;
        if (!this.length) {
            return undefined;
        }
        if (this.length == 1) {
            this.front = -1;
            this.rear = -1;
        } else {
            this.temp = this.front;
            this.temp.next = this.front;
            this.temp.next = null;

        }
        this.length--;
        return temp;
    }
}
const nn = new queue(29);
console.log("Enqueue Operation");
nn.enqueue(20);
nn.enqueue(30);
nn.enqueue(40);
nn.enqueue(50);
console.log(nn);
console.log("Dequeue Operation");
nn.dequeue();
nn.dequeue();
console.log(nn)