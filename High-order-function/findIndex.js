// Array.prototype.findIndex
//(predicate: (value: T, index: number, obj: T[])  => boolean, thisArg?: any): number 🔒 ES6
// arr.findIndex(callback( element[, index[, array]] )[, thisArg])
// 콜백함수의 매개변수를 통해 배열 요소의 값, 요소 인덱스, 메소드를 호출한 배열, 즉 this를 전달 받을 수 있다.

// if true -> 1 else -> -1

var users = [
  { id: 1, name: "Andrea" },
  { id: 22, name: "Kim" },
  { id: 5, name: "Wes" },
  { id: 30, name: "Wes" },
];

// Returns the first true index
// 콜백함수의 매개변수를 통해 배열 요소의 값, 요소 인덱스, 메소드를 호출한 배열, 즉 this를 전달 받을 수 있다.

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
