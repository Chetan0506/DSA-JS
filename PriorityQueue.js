class Node {
    constructor() {
        this.data = 0;
        this.priority = 0;
        this.next = null;
    }
}
var node = new Node();
function newNode(d, p) {
    var temp = new Node();
    temp.data = d;
    temp.priority = p;
    temp.next = null;

    return temp;
}
function push(head, d, p) {
    var start = head;
    var temp = newNode(d, p);
    if (head.priority > p) {
        temp.next = head;
        head = temp;
    } else {
        while (start.next != null && start.next.priority < p) {
            start = start.next;
        }
        temp.next = start.next;
        start.next = temp;
    }
    return head;
}
var pq = newNode(4, 1);
pq = push(pq, 5, 2);
pq = push(pq, 6, 3);
pq = push(pq, 7, 0);
console.log(pq);
