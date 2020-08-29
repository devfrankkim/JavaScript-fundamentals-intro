// ======== splice: remove an item by index position and ADD ELEMENTS ========
// delete & add

// ======== Returning the deleted elements. ========

let animals = ["cat", "dog", "salmon", "tessa", "tuna", "salmon"];
animals.splice(0, 0, 1, 2, 3);

console.log(animals); // (9) [1, 2, 3, "cat", "dog", "salmon", "tessa", "tuna", "salmon"]

//splice(start: number, deleteCount?: number): T[];

// if you don't count the number, it will delete EVERYTHING
// * Removes elements from an array and,
// if necessary, inserts new elements in their place, returning the deleted elements.

fruit.push("one", "two", "three", "four");
console.log(fruit); //(6) ["banana", "apple", "one", "two", "three", "four"]
fruit.splice(1); // return DELETED elements -> (5) ["apple", "one", "two", "three", "four"]

console.log(fruit); // ["banana"];

fruit.push("one", "two", "three", "four");
fruit.splice(1, 1); // ["one"]

console.log(fruit); // (4) ["banana", "two", "three", "four"]

// ======== You can also add more elements after deleting the index element ========

fruit.splice(1, 1, "😅", "😍"); // ["two"]

console.log(fruit); // ["banana", "😅", "😍", "three", "four"]
