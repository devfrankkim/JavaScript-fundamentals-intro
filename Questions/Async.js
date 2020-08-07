let num = 0;
async function increment() {
  num = num + (await 2); // num + Promise.resolve(2)
  // await 2 -> Promise.resolve(2) - event loop
  console.log(num);
}

// increment(); //
num = num + 1;
increment(); //
console.log(num);

/*
 what is the resulting output

1) 2, 3 x
2) 1, 3 
3) 1, 2
4) 2, 1 x

*/
