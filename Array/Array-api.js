// Object -> property, methods(functions)
// JavaScript === dynamically typed language

// ========= Declaration =========
let arr1 = new Array();
let arr2 = [1, 2, 3];

// ========= Index position =========
let fruit = ["banana", "apple"];

console.log(fruit); // (2) ["banana", "apple"]
console.log(fruit[0]); // "banana"
console.log(fruit[fruit.length - 1]); // apple
console.log(fruit[100]); // undefined

// =========  Add, delete, copy (push, pop, shift, unshift)=========
// push: add an item to the end
fruit.push("grapes", "watermelon");
console.log(fruit); // (4) ["banana", "apple", "grapes", "watermelon"]

// pop: remove an item from the end
fruit.pop();
fruit.pop();
console.log(fruit); // (4) ["banana", "apple"]

// unshift: add an item to the beginning
fruit.unshift("adding from the beginning");
console.log(fruit); //  ["adding from the beginning", "banana", "apple"]

// shift: remove an item from the beginning
fruit.shift();
console.log(fruit); // (2) ["banana", "apple"]

// ******************** shift, unshift are SLOWER than 'push', 'pop' ********************
// shift, unshift are very slow because other datas are moving as well.

// 뒤에서 부터 빈공간에 하는 것은 넣었다가 뺐다가 해서 자유롭고 빠르다. (한공간만 사용)
// 기존에 있는 데이터들이 움직이지 않아도 되기 때문이다.

// 맨 앞에서부터 데이터를 넣게 되려면, 다른 데이터들을 뒤로 한칸씩 옮겨야 한다. (반복)
// 삭제할 때도, 첫번째 데이터를 지우고, 뒤에 있는 데이터들을 앞으로 땡겨야 한다. (반복)

// 중간에 데이터를 넣고, 빼는 것도 index를 활용해서 하기 때문에, 빠르다. 하지만, 앞, 뒤 같이 움직여야 하면 느리다.

// ======== Combine two arrays ========
// concat
/*
     * Combines two or more arrays.
     * @param items Additional items to add to the end of array1.     
        
     concat(...items: ConcatArray<T>[]): T[];
*/

let person1 = ["kim", "lee", "andrea"];
let job1 = ["programmer", "teacher", "designer"];
let combined1 = person1.concat(job1); // (6) ["kim", "lee", "andrea", "programmer", "teacher", "designer"]

console.log(combined1); // (6) ["kim", "lee", "andrea", "programmer", "teacher", "designer"]

// ======== Searching ========

// find the index
// indexOf(searchElement: T, fromIndex?: number): number;
// lastIndexOf(searchElement: T, fromIndex?: number): number;

let animals = ["cat", "dog", "salmon", "tessa", "tuna", "salmon"];

animals.indexOf("salmon"); // 2
animals.indexOf("salmon", 3); // 5

animals.lastIndexOf("salmon"); // 5
animals.lastIndexOf("salmon", 4); // 2

animals.indexOf("no elements"); // -1
animals.lastIndexOf("salmon", 0); // -1

animals.includes("ssmon"); // false
animals.includes("salmon"); // true
