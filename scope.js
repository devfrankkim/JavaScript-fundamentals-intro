// Global Scope vs Local Scope

// any variable outside code block {} is said to be in Global Scope.
// Can be accessd anywhere in the program

// Global Scope

let globalName = "frank";
globalName = "andrea";

console.log(globalName); // andrea (1)

// Hey! What's your issue? you already created the variable!!
// const name = "tessa";

// calculate function
function calculate() {
  console.log(globalName); // Before console.log (4)
  globalName = "After";
  console.log(globalName); // After (5)

  function inner() {
    globalName = "inside inner function";
    console.log(globalName); // inside inner function (6)
  }
  inner();
}

// calculate() => what happens if you invoke the function here?

if (true) {
  globalName = "Before console.log";
  console.log(globalName); // Before console.log (2)
}
console.log(globalName); // Before console.log (3)

calculate();

// Local Scope

let localName = "I am the local dude";

console.log(localName); // "I am the local dude"

function calculateLocal() {
  // The variable only works here

  const localName = "frank";
  const age = 100;
  console.log(localName, age); // "frank, 100"

  // Global Scope, to protect the variable, use let or const
  becomesGlobal = "global variable";
}

console.log(localName); // I am the local dude
console.log(becomesGlobal); // becomesGlobal is not defined because the function isn't invoked.
console.log(age); // age is not defined

calculateLocal();
console.log(age); // age is not defined

// after invoking the function, you can grab the global variable inside the function
console.log(becomesGlobal); // global variable

if (true) {
  const localName = "andrea";
  console.log(localName); // "andrea"
}

{
  const localName = "andrea";
  const special = "special";
  console.log(localName, special); // "andrea special"
}
console.log(localName, special); // localName & special is not defined
