class Circularqueue {
    constructor(maxcap) {
        this.data = Array(maxcap);
        this.capacity = maxcap;
        this.currentlength = 0;
        this.front = -1;
        this.rear = -1;
    }
    isFull() {
        return this.currentLength === this.capacity;
    }
    isEmpty() {
        return this.currentLength === 0;
    }
    enqueue(data) {
        if (!this.isFull()) {
            this.rear = (this.rear + 1) % this.capacity;
            this.data[this.rear] = data;
            this.currentlength++;
            if (this.front === -1) {
                this.front = this.rear;
            }
        }

        return data;
    }
    dequeue() {
        if (this.isEmpty()) {
            return null;
        }
        let temp = this.data[this.front];
        this.data[this.front] = null;
        this.front = (this.front + 1) % this.capacity;
        this.currentlength - 1;
        if (this.isEmpty()) {
            this.front = -1;
            this.rear = -1;
        }
        return temp;
    }
    peek() {
        if (!this.isEmpty()) {
            return this.items[this.front];
        }
        return null;
    }
}

const CirQue = new Circularqueue(7);
console.log("Enqueue Operation");
CirQue.enqueue(5);
CirQue.enqueue(6);
CirQue.enqueue(9);
CirQue.enqueue(8);
console.log(CirQue);
console.log("Dequeue Operation");
CirQue.dequeue();
CirQue.dequeue();
console.log(CirQue);
