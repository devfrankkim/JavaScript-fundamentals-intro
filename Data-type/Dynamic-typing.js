// Dynamic typing: dynamically typed language

// IN Runtime -> type can change

let text = "hello";
console.log(text.charAt(0)); // 'h'
console.log(`value: ${text}, type: ${typeof text}`); // value: hello, type: string

// ========= string (+) =========
text = "100" + 100;
console.log(`value: ${text}, type: ${typeof text}`); // value: "100100", type: string

text = "100" + "100";
console.log(`value: ${text}, type: ${typeof text}`); // value: 100100, type: string

// ========= number =========

text = 100;
console.log(`value: ${text}, type: ${typeof text}`); // value: 100, type: number

text = "100" - 100;
console.log(`value: ${text}, type: ${typeof text}`); // value: 0, type: number

text = "100" / 100;
console.log(`value: ${text}, type: ${typeof text}`); // value: 1, type: number

text = "100" - "100";
console.log(`value: ${text}, type: ${typeof text}`); // value: 0, type: number

text = "100" / "100";
console.log(`value: ${text}, type: ${typeof text}`); // value: 1, type: number

text = "100" * "100";
console.log(`value: ${text}, type: ${typeof text}`); // value: "10000", type: number
console.log(text.charAt(0)); // TypeError: text.charAt is not a function
