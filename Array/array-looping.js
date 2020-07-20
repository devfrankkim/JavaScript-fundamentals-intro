// =========  Looping =========

let fruit = ["banana", "apple"];

for (let i = 0; i < fruit.length; i++) {
  console.log(fruit[i]);
}

for (let value of fruit) {
  console.log(value);
}

fruit.forEach((value) => console.log(value));

fruit.forEach(function () {
  console.log("no params"); // 2) no params, no params
});

fruit.forEach(function (value, index, array) {
  console.log("value:", value, "index:", index, "array:", array); // 2) no params, no params
});
// value: banana index: 0 array: (2) ["banana", "apple"]
// value: apple index: 1 array: (2) ["banana", "apple"]

// (callbackFn: (value , index , array) )

// forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void;

// * Performs the specified action for each element in an array.

// * @param callbackfn  A function that accepts up to three arguments.
// forEach calls the callbackfn function one time for each element in the array.

// * @param thisArg  An object to which the this keyword can refer in the callbackfn function.
// If thisArg is omitted, undefined is used as the this value.

// thisArg?: any ->  you have options pass params or not (?:)

let i = 0;
while (fruit.length > i) {
  console.log(fruit[i]);
  i++;
}
