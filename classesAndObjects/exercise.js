// ex 1 student mgmt
let data = "student website data";

class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  viewData() {
    console.log("view data:", data);
  }
}

let student1 = new User("Viraj", "viraj@gmail.com");
let student2 = new User("Shlok", "shlok@gmail.com");
let teacher1 = new User("Priti", "priti@gmail.com");

class Admin extends User {
  editData() {
    data = "edit data";
  }
}

let admin1 = new Admin("admin", "admin@gmail.com");

console.log(admin1);

/*ex 2 Vehicle Management System */
class Vehicle {
  constructor(brand, color) {
    this.brand = brand;
    this.color = color;
  }
  start() {
    return "Vehicle is starting.";
  }
}

class Car extends Vehicle {
  constructor(brand, color, fuelType) {
    super(brand, color);
    this.fuelType = fuelType;
  }
  drive() {
    return "Car is driving.";
  }
  startCar() {
    return `${super.start()}  Car is ready to drive.`;
  }
  //   override start method - You do not need super.start() to override the parent method.
  start() {
    return `${this.brand} car is starting!`;
  }
}

let car1 = new Car("Skoda", "white", "Petrol");

console.log(car1.brand);
console.log(car1.color);
console.log(car1.fuelType);
console.log(car1.drive());
console.log(car1.startCar());

console.log(car1.start());

/*
IMP

Concept	                    Meaning
this.brand	                Accesses the current object's brand
super(brand, color)	        Calls the parent constructor
super.start()	            Calls the parent's start() method
start() in Car	            Overrides the parent's start() method
this.start()	            Calls the current object's start() method, Calling another method in the same class
*/
