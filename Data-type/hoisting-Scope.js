// ========= let (added in ES6)=========

let name = "frank";
// pointer -> 'frank'
// * You can replace the value with new value

// ========= Block Scope =========
// You can only use it inside the Block

let globalName = "global name";
{
  let blockScope = "You can only use it inside the Block";
  console.log(globalName); // "global name"
}  

console.log(globalName); // "global name"
console.log(blockScope); // Uncaught ReferenceError: blockScope is not defined

// ============== var( don't ever use this!) ==============
// var hoisting (move declaration fro m bottom to top)
// has NO block scope

console.log(age); // 100 -> THIS IS DANGEROUS
age = 100;
var age;

{
  blockAge = "var does NOT have Block SCOPE so it's dangerous";
  var blockAge;
}

console.log(blockAge);

// if you really really need to use var, then use BABEL


// ============== Variable types ==============
// Primitive types & Object types

// single item: number, string, boolean, null, undefined, symbol
// object, box container
// -> function, first-class function(can be used as parameters, return type, variables)

// ===== number =====
const count = 99; // integer
const size = 99.9; // decimal number
console.log(`value: ${count}, type: ${typeof count}`); // value: 99, type: number
console.log(`value: ${size}, type: ${typeof size}`); // value: 99.9, type: number

const infinity = 1 / 0;
const negativeInfitinity = -1 / 0;
const notAnumber = "not a number" / 2;
console.log(infinity); // Infinity
console.log(negativeInfitinity); // -Infinity
console.log(notAnumber); // NaN;

// ===== bigInt (fairely new, don't have to use it yet) =====
const beforeBigInt = 123456789012345678901234567890;
const bigInt = 123456789012345678901234567890n; // over (-2^53) ~ (2^53)
console.log(`value: ${bigInt}, type BigInt: ${typeof bigInt}`); // value: 123456789012345678901234567890, type: bigint
console.log(`value: ${beforeBigInt}, type BigInt: ${typeof beforeBigInt}`); // value: 1.2345678901234568e+29, type BigInt: number
Number.MAX_SAFE_INTEGER; // 9007199254740991

/*
--JAVA--
class Main{
  public static void main(String[] args){
    byte a = 12 
    short b = 12 
    long c = 12 
    int d =  12 
    float e = 1.2f  
    double f = 1.2; 
  }
}
*/
