class stackreverse
{
    constructor(maxcapacity)
    {
        this.data=Array(maxcapacity);
        this.capacity=maxcapacity;
        this.currentlength=0;
        this.top=-1;
    }
    isFull()
    {
        return this.currentlength===this.capacity;
    }
    isEmpty()
    {
        return this.currentlength===0;
    }
    push(data)
    {
        if(!this.isFull())
        {
            this.top=(this.top+1)
            this.data[this.top]=data;
            this.currentlength++;
            if(this.top==1)
            {
                this.top=this.data;
            }
        }
        return data;
    }
    reverse()
    {
        for(let i=this.data.length;i>=0;i--)
          {
            console.log(this.data[i]);
          }
    }
}
const st=new stackreverse(3);
st.push("A");
st.push("B");
st.push("C");
console.log(st);
st.reverse();
