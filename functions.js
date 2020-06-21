//Functions, return, if, arrays, for loop

const gas = [20, 40, 100, 30];
const food = [10, 40, 50];

function calculateTotal(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total = total + arr[i];
  }
  return total;
}

const gasTotal = calculateTotal(gas);
const foodTotal = calculateTotal(food);
const total = gasTotal + foodTotal;
const randomTotal = calculateTotal([1000, 1000, 1000]);

console.log({
  gas: gasTotal,
  food: foodTotal,
  total: total,
  randomTotal: randomTotal
});
// {gas: 190, food: 100, total: 290, randomTotal: 3000}
