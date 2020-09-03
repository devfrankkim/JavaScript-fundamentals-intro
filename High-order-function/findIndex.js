// Array.prototype.findIndex
//(predicate: (value: T, index: number, obj: T[])  => boolean, thisArg?: any): number 🔒 ES6
// arr.findIndex(callback( element[, index[, array]] )[, thisArg])

// if true -> 1 else -> -1

var users = [
  { id: 1, name: "Andrea" },
  { id: 22, name: "Kim" },
  { id: 5, name: "Wes" },
  { id: 30, name: "Wes" },
];

// Returns the first true index
function findIndexFunction(key, value) {
  return function (item) {
    return item[key] === value;
  };
}

var index = users.findIndex(findIndexFunction("id", 30));
console.log(index); // 3

var index = users.findIndex(findIndexFunction("id", 22));
console.log(index); // 1

index = users.findIndex(findIndexFunction("name", "wes"));
console.log(index); // -1

// Returns the first true index
index = users.findIndex(findIndexFunction("name", "Wes"));
console.log(index); // 2
