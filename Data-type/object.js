// Object, real-life object, data structure

const frankObject = { name: "frank", age: 100 };
// 'frankObject' 🔓-> reference -> {name: frank, age: 100}
// Object
// variables: name, age
// frankObject.name -> (memory)
// frankObject.age -> (memory)

frankObject.age = 1;
console.log(frankObject); // {name: "frank", age: 1}
 