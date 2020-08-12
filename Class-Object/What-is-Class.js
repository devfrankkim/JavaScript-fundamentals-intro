"use strict";
// Object-oriented programming
// class: template
// object: instance of a class

// JavaScript classes
// - introduced in ES6
// - syntactical sugar over prototype-based inheritance

// ========== Class declarations ==========

class Person {
  // constructor
  constructor(name, age) {
    // fields
    this.name = name;
    this.age = age;
  }

  // methods
  speak() {
    console.log(`${this.name}: hello!!!`);
  }
}

const frank = new Person("frank", 100);

// 우리가 나중에 Object를 만들 때, 필요한 데이터를 전달한다.
// When createing Object, it only passes 'Data' -> (template)

console.log(frank); // Person {name: "frank", age: 100}
frank.speak(); // frank: hello!!!

// ==========  Fields (public, private) ==========

class Experiment {
  publicField = 2;

  // only available inside the Class
  #privateField = 0;
}

const experiment = new Experiment();
console.log(experiment.publicField); // 2
console.log(experiment.privateField); // undefined

// ==========  Inheritance ==========
// a way for once class to extend another class

class Shape {
  constructor(width, height, color) {
    // Fields
    this.width = width;
    this.height = height;
    this.color = color;
  }

  // methods
  draw() {
    console.log(`drawing color: ${this.color}  `);
  }
  getArea() {
    return this.width * this.height;
  }

  // extends Object
  toString() {
    return `Triangle, color: ${this.color}`;
  }
}

class Rectangle extends Shape {}
// Polymorphism
class Triangle extends Shape {
  // overriding
  draw() {
    // call parents
    super.draw();
    console.log("🔺");
  }
  getArea() {
    return (this.width * this.height) / 2;
  }
}

const rectangle = new Rectangle(20, 20, "green");
const triangle = new Triangle(10, 10, "red");
rectangle.draw(); // drawing color: green
triangle.draw(); // drawing color: red  , 🔺
rectangle.getArea(); // 400
triangle.getArea(); // 50

rectangle.toString(); // "Triangle, color: green"
rectangle.draw(); // drawing color: green

// ==========  Instance of (Object)==========

console.log(triangle instanceof Rectangle); // false
console.log(rectangle instanceof Rectangle); // true
console.log(triangle instanceof Triangle); // true
console.log(triangle instanceof Shape); // true
console.log(triangle instanceof Object); // true -> All Objects in JS extends from 'Object'
