class DataStructure {
    constructor(data) {
        this.head = {
            value: data,
            next: null
        }
        this.tail=this.head
    }
    append(data) {
        const newnode = {
            value: data,
            next: null
        }
            this.tail.next = newnode,
            this.tail = newnode,
            this.length++
    }
}
const ds = new DataStructure(255)
ds.append(256)
ds.append(257)
ds.append(259)
ds.append(260)
console.log(ds)