// ========== Property value shorthand ==========

let person1 = { name: "frank", age: 100 };
let person2 = { name: "andrea", age: 80 };
let person3 = { name: "tessa", age: 20 };
let person4 = makePerson("wes", 10);

function makePerson(name, age) {
  return {
    name, // name: name
    age, // age: age
  };
}

person4; // {name: "wes", age: 10}
