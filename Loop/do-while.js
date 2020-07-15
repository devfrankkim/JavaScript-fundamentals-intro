// do while loop, body code is executed FIRST,
// and then check the condition

let i = 5;

while (i > 0) {
  console.log(`while: ${i}`); // 5, 4, 3, 2, 1
  i--;
}

do {
  console.log(`do while: ${i}`); //  do while: 0
  i--;
} while (i > 0);
