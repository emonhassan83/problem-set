/*
 * Task 11: Functional Programming - Reduce
 * Problem: Write a function that uses the reduce function to calculate the total value of an array of objects with a 'Quantity' and 'Price' property using only loops.
 */

const items = [
  { quantity: 2, price: 10 },
  { quantity: 3, price: 15 },
  { quantity: 1, price: 20 },
];

// const reduceArray = (arr) => {
//   let total = 0;

//   for (let i = 0; i < arr.length; i++) {
//     total += arr[i].quantity * arr[i].price;
//   }
//   return total;
// };

//* array reduce method
const reduceArray = (arr) => {
  return arr.reduce((total, item) => total + item.quantity * item.price, 0);
};

const res = reduceArray(items);
console.log(res);
