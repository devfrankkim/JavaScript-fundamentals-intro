```js
var sandwiches = ["salmon", "mushroom", "onions", "salad"];

for (var i = 0; i < sandwiches.length; i++) {
  console.log(`${i} -> ${sandwiches[i]}`); // value
}

/*
0 -> salmon
1 -> mushroom
2 -> onions
3 -> salad
*/

sandwiches
  .forEach((value, index) => console.log(value, index));


    // forEach() for Arrays/NodeLists
/*
  You can loop over an Array or NodeList using a standard for loop,
  however,
  NodeLists cannot be used in conjunction with the newer ECMAScript 5 Array.prototype.forEach.
  This script takes care of that in the same way it loops over an Array,
  you'll get the same stuff passed back:
*/

    // Array:
    ("A", "B", "C", "D")
  ].forEach(function (value, index) {
    console.log("value:", value, "index:", index);
  });


  document.querySelectorAll('div').forEach(function (value, index) {
    console.log(value); // <div>, <div>, <div>...
    console.log(index); // 0, 1, 2...
  });
```

## The old way

```js
var elems = document.querySelectorAll(".some-selector");

for (var i = 0; i < elems.length; i++) {
  console.log(i); // index
  console.log(elems[i]); // value
}
```

## The ES6 way

Fortunately, just like with arrays, there’s a forEach() method for NodeLists.

```js
var elems = document.querySelectorAll(".get-selectors");

elems.forEach(function (elem, index) {
  console.log(index); // index
  console.log(elem); // value
});
```

Unlike Array.forEach(),  
NodeList.forEach() has pretty terrible browser support for IE.
