// parameters(input) ===> return (output)
// API(Application Programming Interface)
// When using API, check the function names for use
// parameters + return + function name

// Function
// - fundamental building block in the program
// - subprogram can be used multiple times
// - Performs a task or Calculates a value

// ========= 1. Function declaration =========
// function name(param1, param2){body-logic return;}
// one function === one thing(task)
// naming -> verb
// ex) FrankisStudyingAndEating -> frankEating , frankStudying
// Function is Object in JavaScript(variables, parameters, return types)

// JavaScript has NO types (string? number?)

function printMessage(message) {
  return console.log(message);
}
printMessage("Typing a message"); // Typing a message
printMessage(1234); // 1234

// TypeScript

// function printMessage(message: string) {
//   console.log(message);
//   return 0;
// }
// printMessage("Typing a message"); // Typing a message

// ========= 2. Parameters =========
// Primitive parameters: passed by value
// Object parameters: passed by reference

function changeNameReference(obj) {
  obj.name = "programmer";
}

const frank = { name: "frank" };
changeNameReference(frank);
console.log(frank); // {name: "programmer"}

// ========= 3. Default Parameters (added in ES6) =========

function showMessageFrom(message, from = "setting default value") {
  console.log(`${message} by ${from}`);
}

showMessageFrom("heyyy!!"); // "heyyy!! by setting default value"

// Before default parameters

function beforeDefaultParameters(message, from) {
  if (from === undefined) {
    from = "unknown Person";
  }
  console.log(`${message} by ${from}`);
}

beforeDefaultParameters("heyyy!!"); // "heyyy!! by unknown Person"

// ========= 4. Rest Parameters (added in ES6) =========
// Passing as an Array to the parameters

// for
function restParametersArray(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }
}
restParametersArray("frank", "is", "coding"); // frank, is, coding

// for of
function forOfArray(...args) {
  for (const arr of args) {
    console.log(arr);
  }
}

forOfArray("frank", "is", "coding", "-> for of"); // frank, is, coding, -> for of

// forEach
function forEachArray(...args) {
  args.forEach((v) => console.log(v));
}

forEachArray("frank", "is", "coding", "-> forEach"); // frank, is, coding, -> for of

forEachArray.length; // 0 -> fucntion is an Object

// ======= 5.Local Scope ======
// You can NOT see from outside, you can only see from inside ex) EXPENSIVE CARS
// Inside the blocks -> Local variable(inside)

let globalMessage = "global Hello"; // global variable
function printGloalMessage() {
  let myMessage = "frank!!";
  console.log(myMessage); // local variable
  console.log(globalMessage);
  console.log(childMessage); // childMessage not defined

  function printAnother() {
    let childMessage = "my son";
    console.log(myMessage);
    console.log(childMessage);
    console.log(globalMessage);
  }
  printAnother();
}

printGloalMessage(); // frank!!, global Hello
console.log(message); // message is not defined

// ======  6. Return a value ======
function sum(a, b) {
  return a + b;
}
const result = sum(1, 2); //3
console.log(`sum: ${sum(1, 2)}`); // sum: 3

// 7. Early return, early exit

// BAD
function upgradeUser(user) {
  if (user.point > 10) {
    // TOO DIFFICULT TO READ!!!!!!!
  }
}

// GOOD
function upgradeUser(user) {
  if (user.point <= 10) {
    return;
  }
}

// ====== 8. Function Expression ======
// variable, parameter, return
// a function declaration can be called earlier than it is defined (hoisted)
// a function expression is created when the execution reaches it.

// 1. function expression

// anonymous function
anonymousPrint(); // error
const anonymousPrint = function () {
  console.log("anonymous function expression");
};

const namedFunction = function namedFunction() {
  console.log("named functions");
};
anonymousPrint();
namedFunction();

const anotherVariable = anonymousPrint;
anotherVariable();

// a function declaration - a function expression
// a function expression -> you can call the function after defining.
// a function declaration

// ====== Callback function using function expression ======
// passing functions as parameters
function passAsParameter(answer, printYes, printNo) {
  if (answer === "love yourself") {
    printYes();
  } else {
    printNo();
  }
}

// Anonymous function
const printYes = function () {
  console.log("yes!!! Love yourself");
};

// Named function
// better debugging in debugger's stack traces
// recursions
const printNo = function print() {
  console.log("No!!! I love you");
  print(); // calling myself -> recursion
};

passAsParameter("wrong", printYes, printNo);
passAsParameter("love yourself", printYes, printNo);

// // ====== Arrow function ======

const simplePrint = () => console.log("simple");
const addArrow = (a, b) => a + b;

const addExpression = function (a, b) {
  return a + b;
};

//  ====== IIFE: Immediately Invoked Function Expression ======

(function hello() {
  console.log("IIFE calling the function right away");
})();

// const add = (a, b) => a + b;
// const substract = (a, b) => a - b;
// const divide = (a, b) => a / b;
// const multiply = (a, b) => a * b;
// const remainder = (a, b) => a % b;

// function calculate(add, a, b) {
//   return add(a, b);
// }
// function calculate(substract, a, b) {
//   return substract(a, b);
// }
// function calculate(divide, a, b) {
//   return divide(a, b);
// }
// function calculate(multiply, a, b) {
//   return multiply(a, b);
// }
// function calculate(remainder, a, b) {
//   return remainder(a, b);
// }

// calculate(add, 100, 100); // 200
// calculate(substract, 100, 100); // 0
// calculate(divide, 100, 100); // 1
// calculate(multiply, 100, 100); // 10000
// calculate(remainder, 100, 100); // 0

function calculate(command, a, b) {
  switch (command) {
    case "add":
      return a + b;
    case "substract":
      return a - b;
    case "divide":
      return a / b;
    case "multiply":
      return a * b;
    case "remainder":
      return a % b;
    default:
      throw Error("unknown command");
  }
}
console.log(calculate("add", 100, 100)); // 200
console.log(calculate("substract", 100, 100)); // 0
console.log(calculate("multiply", 100, 100)); // 10000
console.log(calculate("divide", 100, 100)); // 1
console.log(calculate("remainder", 100, 100)); // 0
console.log(calculate("noCommand", 100, 100));
