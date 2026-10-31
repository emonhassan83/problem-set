/* 
* Write a function findOddSum() that will take the array as the input parameter and will return the sum of the odd numbers. No need to return anything if the odd numbers do not exist in the array

* Sample Input: [5, 7, 8, 10, 45, 30]
*/
const numbers = [5, 7, 8, 10, 45, 30];

function oddNumberArraySum(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 1) {
      sum += arr[i];
    }
  }
  return sum;
}

console.log("odd number sum: ", oddNumberArraySum(numbers));

//* array reduce method
const oddNumberArraySum2 = (numbers) => {
  const oddNumSum = numbers
    .filter((num) => num % 2 !== 0)
    .reduce((sum, num) => sum + num, 0);
  return oddNumSum;
};

console.log("odd number sum: ", oddNumberArraySum2([5, 7, 8, 10, 45, 30]));
