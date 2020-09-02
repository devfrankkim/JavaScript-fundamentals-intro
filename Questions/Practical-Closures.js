// Solve the problem occurring in the second closure example

// Simple Closure
function f1(a) {
  let b = 2;
  setTimeout(function () {
    console.log(a, b);
  }, 1000);
}

// Closure with a problem
function f2() {
  for (var i = 0; i < 3; i++) {
    setTimeout(function () {
      console.log(i);
    }, 1000 * i);
  }
}
