// bind() - Returns a new function with bound this

function greet()
{
    return `Hi, ${this.name}`
}


const greetUser = greet.bind({name: 'Rahul'})

console.log(greetUser())  // Hi, Rahul


function greeting(greeting)
{
    return `${greeting}, my name is ${this.name}`
}

const greetingUser = greeting.bind({name: 'Rahul'}, 'Hello')

console.log(greetingUser()) // Hello, my name is Rahul