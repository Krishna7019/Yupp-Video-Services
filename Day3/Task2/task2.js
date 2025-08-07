// call() - Calls a function with given this value and arguments

function greet()
{
    return `Hi, ${this.name}`
}

const person = {name: 'Rahul'}
console.log(greet.call(person)) // Hi, Rahul


function greeting(greeting)
{
    return `${greeting}, my name is ${this.name}`
}

const person1 = {name: 'Raju'}
console.log(greeting.call(person1, 'Hello')) // Hello, my name is Raju
