function Person(firstName, lastName)
{
    this.firstName = firstName
    this.lastName = lastName
    this.sayHello = function()
    {
        return `Hello ${this.firstName} ${this.lastName}`
    }
}

let person = new Person('David', 'Warner')
console.log(person.sayHello())