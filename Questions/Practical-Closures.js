// Solve the problem occurring in the second closure example

// closure
// setTimeout
// VAR is either 1. globally scoped or 2. scoped inside of its function
// LET is scoped inside of CURLY BRACES

/*
ex)
  for (let i = 0; i < 2; i++){
    ======= SCOPE for the variable =======
  }
 
*/

// Simple Closure
function f1(a) {
  let b = 20;
  setTimeout(function () {
    console.log("a:", a, "b:", b);
  }, 1000);
}

f1(10); // a: 10 b: 20

// Answer =>
// "a & b" are same the scope which is in the same scope as the setTimeout(Function())

// Closure with a problem
function f2() {
  for (var i = 0; i < 3; i++) {
    setTimeout(() => {
      console.log(i); // 3, 3, 3
    }, 1000 * i);
  }
}

/*
  The closure was created at this level ->

  function f2() {
        ======== Right here =========

    for (var i = 0; i < 3; i++) {
      setTimeout(() => {
        console.log(i); // 3, 3, 3
      }, 1000 * i);
    }
       ======== Right here  =========
         
       console.log(i); // 3
}

   Once the stack is done and the variable i is set to 3,
   A closure has been created around the variable
   so it's protected. it's not going to be destryoed

   FINALLY, setTimeout(function(){}) is then gonna run after 
*/

function f3() {
  for (let i = 0; i < 3; i++) {
    setTimeout(() => {
      console.log(i); // 0, 1, 2
    }, 1000 * i);
  }
}

/*
   for (let i = 0; i < 3; i++) {
    ======= The variable is declared inside the curly braces =======
    ===== so it only exists inside the braces =====

    so when the closure gets created around the variable,
    it knows that variable is not going to exist any more
    so I have to take it with me so that the value 'i' is going to be carried over
    and it will be saved
  } 

  console.log(i); // 'i' no longer exists
*/

/*
  The closure was created at this level ->

 function f3() {

  for (let i = 0; i < 3; i++) {
           ======== Right here  =========

    setTimeout(() => {
      console.log(i); // 0, 1, 2
    }, 1000 * i);

           ======== Right here  =========
  }

}
  console.log(i) // no longer exists
*/

f2(); // 3 , 3 , 3
f3(); // 0, 1, 2

// ----------------

/*
Closure is happening when you are using variables
inside of a function 
the function is going to run later and the variables inside of the function are coming 
from outside of the function
*/

function varClosure() {
  for (var y = 0; y < 3; y++) {
    setTimeout(() => {
      console.log(y); // 3, 3, 3
    }, 1000 * y);
  }
  console.log(y); // 3
}

varClosure();

function letClosure() {
  for (let i = 0; i < 3; i++) {
    setTimeout(() => {
      console.log(i); // 0, 1, 2
    }, 1000 * i);
  }
  console.log(i); // Uncaught ReferenceError: i is not defined
}

letClosure();

// ========== binding ==========

function f4() {
  for (let i = 0; i < 3; i++) {
    setTimeout(
      function (x) {
        console.log(x); // 0, 1, 2
      }.bind(this, i),
      1000 * i
    );
  }

  console.log(i); // 'i' is not defined
}
// couple things you gotta pass in the first thing is the bind argument
// this or null or window or whatever + list of arguments
// "this" gets passed as a parameter to the function()
// Now, I can use the variable function(i)

/*
Taking this function and then binding we are binding it to whatever we want

-> Run this code immediately as we run through the loop
-> bind(this, i) takes the current value of "i"
-> Pass it into the parameter (X) and that gets saved inside of the function


i -> 0, 1, 2 
pass into the parameter and that's being saved

function (x) {
  console.log(x)
}.bind(this, i)


  Take this fucntion and we are to capture the value of "i"
  With the captured value of "i"
  that's what we pass off to the setTimeout function

*/

function f4() {
  for (var i = 0; i < 3; i++) {
    setTimeout(
      function (x) {
        console.log(x); // 0, 1, 2
      }.bind(this, i),
      1000 * i
    );
  }

  console.log(i); // 3
}
