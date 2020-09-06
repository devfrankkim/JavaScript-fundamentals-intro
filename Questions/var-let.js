// let vs var hoisting
/*
    let is block scope
    var will be hoisted and it will be given up
*/

// What will be the output from this code and why?

function f() {
  console.log("var", area); // undefined
  console.log("let", name); // Reference Error: "Cannot access 'name' before initialization"
  let name = "Bert";
  var area = "Geology";
}
// console.log("var", area); // 'area' is not defined
f();
// console.log("var", area); // 'area' is not defined

// =============== Explanation for var ===============
function f() {
  var area;
  //   area = undefined;
  console.log("var", area); // undefined
  area = "Geology";
}
f();
