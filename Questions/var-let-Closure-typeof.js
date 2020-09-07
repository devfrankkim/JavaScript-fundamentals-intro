// let vs var hoisting
// Closure - private variables
/*
    
    1. var will be hoisted to the top.
    BUT var will be given the UNDEFINED!!!
    => something = undefined;

    2. let will be hoisted to the top. 
    let is block scope
    => something; // unaccessible
    you can't change your value.
    you can't assign anything to it.
    until you actually decalre it.
*/

// What will be the output from this code and why?
function f() {
  console.log("var", area); // undefined
  console.log("let", name); // Reference Error: "Cannot access 'name' before initialization"
  let name = "Bert";
  var area = "Geology";
}
// console.log("var", area); // 'area' is not defined
f();
// console.log("var", area); // 'area' is not defined

// =============== Explanation for var ===============
function f() {
  var area;
  // area = undefined;
  console.log("var", area); // undefined
  area = "Geology";
}

f();
// =============== Explanation for let ===============

function f() {
  // name;  // not defined, not assign any default value
  // not given anything yet.
  console.log("let", name); // Reference Error: "Cannot access 'name' before initialization"
  let name = "Bert";
}
// console.log("var", area); // 'area' is not defined
f();

// ------- solution to check if it's defined -------
if (typeof something === "undefined") {
  console.log("something was not defined");
}

if (typeof something === undefined) {
  console.log("something was not defined");
}
// undefined

frank === undefined; // Uncaught ReferenceError: frank is not defined
typeof frank; // "undefined"

// ====== solution ======
function f() {
  console.log(area); // undefined
  if (area !== undefined) {
    console.log("var", area);
  }

  if (typeof something !== "undefined") {
    console.log("something is not defined");
  }

  try {
    console.log("let", name); // ReferenceError
  } catch (err) {
    console.log(err.name); // ReferenceError
    console.log(err.message); // not defined -> Cannot access 'name' before initialization
  }
  let name = "Bert";
  var area = "Geology";
}
// console.log("var", area); // 'area' is not defined
f();

// ====== this ======

function Person(name) {
  this.name = name;
}

var me = new Person("frank");
me; // Person {name: "frank"}
me.name; // "frank"

// ====== closure function ======

function Person1(name) {
  var name = name;
}

var varMe = new Person1("frank");
me; // Person { }

//========  private variable ========

function Person2(name) {
  var _name = name;

  this.getName = function () {
    return _name;
  };
}

var varMe = new Person2("frank");
varMe.getName(); // "frank"
