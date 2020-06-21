//Functions, return, if, arrays, for loop

const gas = [20, 40, 100, 30];
const food = [10, 40, 50];

function calculateTotal(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total = total + arr[i];
  }

  if (total > 100) {
    console.log(`dang! you are spending way too muchhh!!`);
    return total;
  }

  console.log(`You are good. Total is less than 100`);

  return total;
}

const gasTotal = calculateTotal(gas);
const foodTotal = calculateTotal(food);
const total = gasTotal + foodTotal;
const randomTotal = calculateTotal([1000, 1000, 1000]);

// How to group arrays all together? => make an Object for them.

console.log({
  gas: gasTotal,
  food: foodTotal,
  total: total,
  randomTotal: randomTotal
});

// {gas: 190, food: 100, total: 290, randomTotal: 3000}

// Example (2)
// if total > 100, return;
// {gas: undefined, food: 100, total: NaN, randomTotal: undefined}

/* 
   Because it's a conditon to return the value or not. 

   " if total > 100, return; "

   It means, you are not returning anything if total > 100, 
   so basically, you are just ignoring the condition. 
   It is flexible.
*/
