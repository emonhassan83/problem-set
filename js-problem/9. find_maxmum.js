/*
 * Task 9: Find Maximum Value
 * Problem: Write a function that takes an array of numbers and returns the maximum value using only a loop.
 */

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const findMaxValue = (arr) => {
  let max_val = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max_val) {
      max_val = arr[i];
    }
  }
  return max_val;
};

const res = findMaxValue(numbers);
console.log(res);
