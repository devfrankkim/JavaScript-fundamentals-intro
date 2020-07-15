// symbol, create unique indentifiers for objects (Priorities) Map, Set

// Symbol (unique)
const symbol1 = Symbol("id");
const symbol2 = Symbol("id");
console.log(symbol1 === symbol2); // false

// Symbol.for (Same)
const symbolSame1 = Symbol.for("id");
const symbolSame2 = Symbol.for("id");

console.log(symbolSame1 === symbolSame2); // true

console.log(symbol1); // Symbol(id)
console.log(symbolSame1); // Symbol(id)
console.log(typeof symbol1); // symbol
console.log(typeof symbolSame1); // symbol
console.log(`value: ${symbol1}, type: ${typeof symbol1}`); // Cannot convert a Symbol value to a string
console.log(`value: ${symbolSame1}, type: ${typeof symbolSame1}`); //  Cannot convert a Symbol value to a string

// =========== symbol.description ===========
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`); // value: id, type: symbol
console.log(`value: ${symbolSame1.description}, type: ${typeof symbolSame1}`); // value: id, type: symbol
