        class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class SLL {
    constructor(data) {
        const newnode = new Node(data);
        this.head = newnode;
        this.tail = newnode;
        this.length = 1;
    }
    push(data) {
        const newnode = new Node(data);
        if (!this.length) {
            this.head = newnode;
            this.tail = this.head;
        }
        else {
            this.tail.next = newnode;
            this.tail = newnode;
        }
        this.length++;
        return this;
    }
    pop() {
        if (!this.length)
            return undefined;
        if (this.length == 1) {
            let temp = this.head;
            this.head = null;
            this.tail = null;
            this.length--;
            return temp;
        }
        else {
            let temp = this.head;
            let prev = this.head;
            while (temp.next) {
                prev = temp;
                temp = temp.next;
            }
            this.tail = prev;
            this.tail.next = null;
            this.length--;
            return temp;
        }
    }
    unshift(Value) {
        const newnode = new Node(Value);
        if (!this.length) {
            this.head = newnode;
            this.tail = this.head;
        }
        else {
            newnode.next = this.head;
            this.head = newnode;
        }
        this.length++;
        return this;
    }
    shift() {
        let temp = this.head;
        if (!this.length)
            return undefined;
        if (this.length == 1) {
            this.head = null;
            this.tail = null;
        }
        else {
            this.head = this.head.next;
            temp.next = null;
        }
        this.length--;
        return temp;
    }
}

const sll = new SLL();
 sll.push(20); 
 sll.push(21);
 sll.push(22) ;
//  sll.pop();
sll.shift();
console.log(sll)
console.log(JSON.stringify(sll));