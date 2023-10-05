class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}
class Singly{
    constructor(data){
        const newNode=new Node(data);
        this.head=newNode;
        this.tail=this.head;
        this.length=1;
    }
    Push(data){
        const newNode= new Node(data);
        this.tail.next=newNode;
        this.tail=newNode;
        this.length++;
        return this;
    }
    Pop{
        if(!this.length) return undefined;
        if(this.length==1){
            this.head=null;
            this.tail=null;
            this.length--;
        }
        else{
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
}

const sll=new Singly(24);
sll.Push(23);
sll.Push(22);
sll.Push(21);
sll.Pop;
sll.Pop;
console.log(JSON.stringify(sll));