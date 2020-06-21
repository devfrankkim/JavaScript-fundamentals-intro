// Global Scope vs Local Scope

// any variable outside code block {} is said to be in Global Scope.
// Can be accessd anywhere in the program

// Global Scope

let globalName = "frank";
globalName = "andrea";

// Hey! What's your issue? you already created the variable!!
// const name = "tessa";

// calculate function
function calculate() {
  console.log(globalName); // Before console.log
  globalName = "After";
  console.log(globalName); // After

  function inner() {
    globalName = "inside inner function";
    console.log(globalName); // inside inner function
  }
  inner();
}

// calculate() => what happens if you invoke the function here?

if (true) {
  globalName = "Before console.log";
  console.log(globalName); // Before console.log
}

calculate();

// Local Scope

let localName = "I am the local dude";

function calculateLocal() {
  // The variable only works here

  const localName = "frank";
  const age = 100;
  console.log(localName, age); // "frank"

  // Global Scope, to protect the variable, use let or const
  becomesGlobal = "global variable";
}

console.log(localName); // I am the local dude
console.log(becomesGlobal); // becomesGlobal is not defined
console.log(age); // age is not defined

calculateLocal();
console.log(age); // age is not defined

// after invoking the function, you can grab the variable inside the function
console.log(becomesGlobal); // global variable

if (true) {
  const localName = "andrea";
  console.log(localName); // "andrea"
}

{
  const localName = "andrea";
  const special = "special";
  console.log(localName, special);
}
console.log(localName, special); // special is not defined
