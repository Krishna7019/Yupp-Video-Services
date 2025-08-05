class MyStack {
    constructor() 
    {
        this.items = []
    }

    push(number)
    {
        this.items.push(number)
    }

    pop()
    {
        if(this.items.length === 0)
        {
            return 'Stack is Empty'
        }
        return this.items.pop()
    }

    peek() 
    {
        
        return this.items[this.items.length-1]
    }

    isEmpty() 
    {
        return this.items.length === 0
    }
}

let stack = new MyStack()
stack.push(10)
console.log(stack.pop())
stack.push(20)
stack.push(40)
console.log(stack.peek())
console.log(stack.isEmpty())
