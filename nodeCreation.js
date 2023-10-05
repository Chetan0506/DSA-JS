class Mynode{
    constructor(data)
    {
        this.head={
            value:data,
            next:null
        }
    }
}
const obj=new Mynode(10)
console.log(obj)