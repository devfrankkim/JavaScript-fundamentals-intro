// DOM theory1
// When we write our HTML and view it in a browser,
// Browser turns into a document object model
// in DOM, each element becomese an Object or Node
// We are using built-in methods to interact with these Nodes using JavaScript

// Any element or "text" is going to be Node

document.body.style.backgroundColor = "lightblue"; // selecting the body
document.body.style.color = "red";
document.getElementById("btn").style.color = "red";

// you can also assign to a variable

const element = document.getElementById("element");

// do something with the assigned variable and then you can access the Node Object

document.querySelector("element"); // do something;

// wherre's the document coming from?
// access to the global window object through JS file
// window object

// the browser will look for window object eventually so you can skip it.
// console.dir

// within the document property, we have access to the methods and other properties

// returns a node object or a node list(which is an arraylike object)

// global window object has a property => "document" {document}

// Node object or node list(array-like object)

const btn = document.getElementById("btn");
const name = btn.nodeName;
const css = btn.style;

// You will see the objects

// console.log(btn);
// console.log(name);
// console.log(css);
