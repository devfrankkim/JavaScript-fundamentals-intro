//version 1
let a1 = Array.from(
  {
    length: 5,
  },
  (n) => Math.random()
);
console.log("1", a1);

/*
  Array.from({length: 3}); //  [undefined, undefined, undefined]
  new Array(3).fill() // (3) [undefined, undefined, undefined]
*/

//version 2
let a2 = new Array(5).fill(1).map(() => Math.random());
console.log("2", a2);
