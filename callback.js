// functions in JavaScript are first class objects so we can store them in variable which is an expression
// we can pass as an argument to another function OR we can return them from the function

// Callback functions - Higher Order Functions, Functions as First Class Objects/Citizens

/*
Functions are first class objects
-> stored in a variable(expression), passed as argument to another function,
return from the function (closure)
*/

// Higher Order function
// -> Accepts another function as an argument or returns another function as a result

// Callback Function
// -> Passed to a another function as an argument and executed inside that function

// The function that receives the function -> high order function
// The function is being passed -> callback function

// call back function -> you have a choice when and where to call the function

// Key point is to stop repeating million times and make functions flexible

// callback is the one we are passing
function morning(name) {
  return `Good morning!!! ${name.toUpperCase()}`;
}

// callback is the one we are passing
function afternoon(name) {
  return `Good afternoon!!! ${name.repeat(5)}`;
}

// callback is the one we are passing
function evening(name) {
  return `Good evening!!! ${name.toUpperCase()}`;
}

// high order function -> is the one that accepts the function
// callback is the one we are passing
function greet(name, callback) {
  const myName = "frank";
  console.log(`${callback(name)}!! my name is ${myName}`);
}

// We DO NOT invoke the callback functions right away
greet("love", morning);
greet("andrea", afternoon);

// Hate repeating functions!!!!

// function greetMorning(name) {
//   const myName = "frank";
//   console.log(`Good morning ${name}!! my name is ${myName}`);
// }

// function greetAfternoon(name) {
//   const myName = "tiffany";
//   console.log(`Good afternoon ${name}!! my name is ${myName}`);
// }
