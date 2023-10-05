class DataStructure{
    constructor(data){
        this.head={
            value:data,
            next: null
        }
        // this.tail=this.head
    }
    prep(data){
        const newnode={
            value:data,
            next:null
        }
        this.newnode.next=this.head
        this.head=this.newnode
    }
}
const llh=new DataStructure(260)
llh.prep(259)
llh.prep(257)
llh.prep(256)
llh.prep(255)
console.log(llh)
