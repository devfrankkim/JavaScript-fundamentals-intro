// Rest Parameters
// => To create a function which can take any number of parameters
// Receiving all the parameters
// Will have rest of the parameters
// Providing Array Destructuring

// arguments Object -> ES5
// ES6 -> With Arrow function, arguments is not going to work.
// With rest parameters we can gather
// any number of arguments into an array and do what we want with them.
// Note: Rest parameters have to be at the last argument.
// It's providing Array Destructuring ex) ...[number]

// spread the array into a list of parameters then put the result into a new array

// Before rest parameters existed,
// to get all the arguments in a function we used arguments which is an array-likeobject.

function sum(b, ...a) {
  console.log(b, a);
}

sum(5, 6, 7); // 5 [6, 7]

// Array Destructuring
function sumA(...[a]) {
  console.log(a);
}

sumA(5, 6, 7); // 5

function sumB(...number) {
  console.log(number);
}

sumB(5, 6, 7); // [5, 6, 7]

// =========== Arguments keyword ===========
function someFunction() {
  return arguments;
}

someFunction("frank", 100, false); // Arguments(3) ["frank", 100, false, callee: ƒ, Symbol(Symbol.iterator): ƒ]
