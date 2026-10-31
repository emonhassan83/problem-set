/* 
* Task 6: Array Reduction
* Problem: Create an array of numbers. Write a function to calculate the sum of all even numbers in the array using only a loop.
*/

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const arrayReduce = (arr) => {
//     let sum = 0;

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i]% 2 === 0) {
//             sum += arr[i];
//         }
//     }
//     return sum;
// }

const arrayReduce = (arr) => {
    return arr.reduce((sum, num) => {
        return num % 2 === 0 ? sum + num : sum;
    }, 0);
}

const res = arrayReduce(numbers);
console.log(res);