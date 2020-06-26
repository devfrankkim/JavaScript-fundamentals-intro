// node-list = array-like object
// index, length property but you can NOW array methods BECAUSE it is NOT array
// A node list is essentially a collection of nodes and is very much like an array, but does not support array methods.
const headingItem1 = document.getElementsByTagName("h1");
const headingItem2 = document.getElementsByTagName("h2");
const headingItem3 = document.getElementsByTagName("h3");
const headingItem4 = document.getElementsByTagName("h4");
const listItem = document.getElementsByTagName("li");

// headings[0].style.color = "purple";

// solution => 1. for loop 2. make a real array

// solution 1
for (let i = 0; i < headingItem1.length; i++) {
  headingItem1[i].style.color = "red";
}

// solution  forEach, map, spread operator
Array.from(headingItem2).forEach(h => {
  return (h.style.color = "purple");
});
// console.log(headingItem2.length);

Array.from(headingItem3).map(h => {
  return (h.style.color = "blue");
});
// console.log(headingItem2.length);

// console.log(listItem); array-like object
const realItems = [...listItem];
// console.log(betterItems); // array

realItems.forEach(function(items) {
  items.style.color = "green";
  console.log(items);
});

console.log(realItems);

var h4 = document.getElementsByTagName("h4")[0];
console.log(h4.attributes); // NamedNodeMap {length: 0}

var a = document.querySelectorAll("h1");
console.log(a[0]); // <h1 style="color: red;">Hello</h1>
console.log(a[0].attributes); // NamedNodeMap {0: style, style: style, length: 1}
