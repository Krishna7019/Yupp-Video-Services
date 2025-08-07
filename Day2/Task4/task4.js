// In JS, functions are first-class objects, and every function you create automatically gets a prototype property.
// This prototype is an object that’s used when you use the function as a constructor with the new keyword

function Person(name) {
  this.name = name;
}

// Add method to prototype
Person.prototype.sayHello = function() {
  return "Hello, I am " + this.name;
};

let person1 = new Person("Rama");
console.log(person1.sayHello()); // Hello, I am Rama


let person2 = new Person("Virat");

console.log(Object.getPrototypeOf(person1) === Object.getPrototypeOf(person2))
console.log(Object.getOwnPropertyNames(person1))