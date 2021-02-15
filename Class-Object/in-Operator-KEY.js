// ========== in Operator: property existence check (key in obj) ==========
let objFrank = { name: "frank", age: 100, value: "Direct from object" };

console.log("name" in objFrank); // true
console.log("age" in objFrank); // true
console.log("job" in objFrank); // false

console.log(objFrank.random); // undefined
