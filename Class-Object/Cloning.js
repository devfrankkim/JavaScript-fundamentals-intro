// ========== Cloning ==========

// Think of memory.
// What happened to the memory?

// Object.assign(target, [obj1, obj2, obj3...])

// user = (reference) -> name:frank && age:100
// user2 = (reference) -> name:frank && age:100
let user1 = { name: "frank", age: 100 };
let user2 = user1;

// user1 = (reference) -> name:programmer && age:100
// user2 = (reference) -> name:programmer && age:100
user2.name = "programmer";
user2.age = 200;

console.log(user1); // {name: "programmer", age: 200}
console.log(user2); // {name: "programmer", age: 200}

// ====== OLD WAY (manual) ======

//  *** NOOOOOOO ***
// for (let key in user1) {
//   user3.key = user1.key;
// }

let user3 = {};
let user4 = {};

for (let keyValue in user1) {
  user3[keyValue] = user1[keyValue];
}

for (let key in user3) {
  user4[key] = user3[key];
}

user3; // {name: "frank", age: 100}
user4; // {name: "frank", age: 100}

user4.name = "andrea";
user4.age = 200;

user3; // {name: "frank", age: 100}
user4; // {name: "andrea", age: 100}

// ====== New way (object.assign) ======
// all the Objects in JavaScripts are extended from 'Object'

// assign<T, U, V, W>(target: T, source1: U, source2: V, source3: W): T & U & V & W;
// assign(target: object, ...sources: any[]): any;
// keys(o: {}): string[];

// target -> which one are you trying to copy?
// many sources -> from which ones?

let newUser1 = {};
Object.assign(newUser1, user4);

user4; // {name: "andrea", age: 100}
newUser1; // {name: "andrea", age: 100}

newUser1.addJob = "programmer";
newUser1.salary = "6 figures";

user4; // {name: "andrea", age: 100}
newUser1; // {name: "andrea", age: 100, addJob: "programmer", salary: "6 figures"}

let newUser2 = Object.assign({}, newUser1);

newUser1; // {name: "andrea", age: 200, addJob: "programmer", salary: "6 figures"}
newUser2; // {name: "andrea", age: 200, addJob: "programmer", salary: "6 figures"}

newUser2.name = "frank";
newUser2.age = 100;

delete newUser2.addJob;

newUser1; // {name: "andrea", age: 200, addJob: "programmer", salary: "6 figures"}
newUser2; // {name: "frank", age: 100, salary: "6 figures"}

// other examples
let fruit1 = { color: "red" };
let fruit2 = { color: "blue", size: "small" };
let fruit3 = { from: "Korea", size: "huge" };

let fruit4 = Object.assign([], fruit1, fruit2, fruit3);

fruit3; // [color: "blue", size: "huge", from: "Korea"]
