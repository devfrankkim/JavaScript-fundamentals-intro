// ========== for.. in VS for.. of ==========
// for (key in obj) -> getting keys
// for of ->  for (value of iterable)

let objFrank = { name: "frank", age: 100, value: "Direct from object" };

for (let key in objFrank) {
  console.log("key: ", key); // name, age, value
  console.log("computed properties - value: ", objFrank[key]); // frank, 100, Direct from object
  console.log("approaching.directly", objFrank.key); // frank, 100, Direct from object
}
/*
    key:  name
    computed properties - value:  frank
    approaching directly undefined

    key:  age
    computed properties - value:  100
    approaching directly undefined
    
    key:  value
    computed properties - value:  Direct from object
    approaching directly undefined

*/

// for (value of iterable)
let array = [1, 2, 3, 4, 5];

for (let i = 0; i < array.length; i++) {
  console.log(array[i]); // 1, 2, 3, 4, 5
}

for (let value of array) {
  console.log(value); // 1, 2, 3, 4, 5
}
