let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);

const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1;

// ====== || (or) -> finds the first truthy value and stops ======
//====== && (and) -> finds the first falsy value and stops ======

// heavy operations come last

// ex) ${false && false && function()}
// ex) ${false && false && function()}

// ====== nullableObject && nullableObject.something ======
if (nullableObject != null) {
  nullableObject.something;
}

// ====== Object equality by reference ======

const frank1 = { name: "frank" };
const frank2 = { name: "frank" };
const frank3 = frank1;
console.log(frank1 == frank2); // false
console.log(frank1 === frank2); // false
console.log(frank1 === frank3); // true

// ====== equality - puzzler ======
console.log(0 == false); // true
console.log(0 === false); // false
console.log("" == false); // true
console.log("" === false); // false
console.log(null == undefined); // true
console.log(null === undefined); // false

// ====== Tenary Operator ======
let name = "frank";
console.log(name === "frank" ? "yes frank" : "NOPE"); // "yes frank"
