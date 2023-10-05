class StackArray {
    constructor(maxcap) {
        this.array = Array(maxcap);
        this.capacity = maxcap;
        this.currentlength = 0;
        this.top = -1;
    }
    isfull() {
        return this.currentlength == this.capacity;
    }
    isempty() {
        return this.currentlength == 0;
    }
    push(data) {
        if (this.isfull()) {
            return undefined;
        }
        if (this.isempty()) {
            this.top++;
            this.array[this.top] = data;
        } else {
            this.top++;
            this.array[this.top] = data;
        }
        this.currentlength++;
        return data;
    }
    pop() {
        let temp = this.top;
        if (this.isempty()) {
            return undefined;
        } else {
            this.array[this.top] = null;
            this.top--;
        }
        this.currentlength--;
        return temp;
    }
    peek() {
       return this.top;
    }
}
const st = new StackArray(5);
console.log("Push Operation");
st.push(10);
st.push(20);
st.push(30);
console.log(st);
console.log("Pop Operation");
st.pop();
st.pop();
console.log(st);
console.log("Peek Operation");
st.peek()
console.log(st);
