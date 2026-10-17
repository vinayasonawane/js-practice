//object
let student = {
  name: "Kunal",
  standard: 3,
  division: "C",
  passedExam: true,
  msg() {
    //we can add function in object
    console.log("Welcome");
  },
};
console.log(student);
/*
if we print this Object, we get prototype - which itself is an Object.
prototype is in-built object we get from an js object

prototype's all properties get inherit into object
*/

let fn = {
  myFn() {
    console.log("Call fn inside obj");
  },
};
// use of __proto__
const student2 = {
  name: "Karan",
};
student2.__proto__ = fn;
console.log(student2);

/* Class in JS
blueprint for creating objects.
a class is a design for making users. Each user object can have its own name but share the same methods.
*/
class Car {
  constructor(brand, color) {
    this.brand = brand;
    this.color = color;
  }
  start() {
    return `start the car ${this.brand}`;
  }
  stop() {
    return `stop the car ${this.brand}`;
  }
}

const car1 = new Car("BMW", "Black"); // new keyword Creates a new object, refers all methods from Car class.

console.log((car1.price = 5000));
console.log("print car1 function:", car1.start()); // access the fn
console.log("print car1:", car1);

//constructor eg.
// constructor - start with caps letter, it's a special function in js
// useful when we want to create multiple objects with same properties
function StudentsInfo(name, division) {
  this.name = name;
  this.division = division;
}

const student1 = new StudentsInfo("Komal", "C");
console.log(student1);

//inheritance
/*
passing down properties n methods from parent class to child class
syntax:
class Parent {}

class Child extends Parent {}
*/

class LivingThings {
  eat() {
    return "Eat!";
  }
  sleep() {
    return "Sleep!";
  }
  work() {
    return "Work!";
  }
  constructor(name) {
    this.name = name; // to access this in child class, we use super
  }
  greet() {
    //method in parent
    return "Hello from Parent";
  }
}

class Person extends LivingThings {
  // extends keyword to inherit properties from parent
  work() {
    super.greet();
    console.log("work console from child class");
    return "Work in office, some business"; // if parent n child has same methods, child method will be used (method override)
  }

  constructor(name, birthYear) {
    super(name); // use of super, to invoke/call parent class's constructor
    this.birthYear = birthYear;
  }
  greet() {
    console.log("super.method");
    console.log(super.greet()); // super.method() — when overriding (or explicitly calling a parent method)
    console.log("Hello from Child");
  }
}

let shradha = new Person("Shradha", 22); // inherit properties from LivingThings
console.log(shradha);
console.log("method called / inherited from parent: ", shradha.greet());

console.log(shradha.eat(), shradha.work(), shradha.birthYear); // printing diff properties from parent and child class

// we use super when a class extends another class
// super keyword is used in a child class to access the parent class's constructor or methods.
// extends → establishes inheritance between classes.
// super() → calls the parent constructor.
// super.method() — when overriding (or explicitly calling a parent method)
// super() is mandatory when a child class has its own constructor and extends a parent class,
