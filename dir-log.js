// Difference between console.log() and console.dir()

// referencing the current change automatically real-time

var obj = {};
console.log(obj); //  {} a: 1 __proto__: Object
obj.a = 1;
console.log(obj); // {a: 1} a: 1 __proto__: Object

var arr = [];
console.log(arr, arr.length); // [] 0: 5 length: 1;
setTimeout(function() {
  arr.push(5);
}, 0);

// solution 1 => don't deep copy or use object for logging
// solution 2 => use console.dir() for object

function f() {
  return true;
}
console.log(f);
console.dir(f);
