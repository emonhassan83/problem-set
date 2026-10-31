/*
 * Task 8: Unique Values
 * Problem: Create an array of numbers with some duplicate values. Write a function to filter out the duplicate values and return a new array with only unique numbers using only loops.
 */

const numbersWithDuplicates = [1, 2, 2, 3, 4, 4, 5, 5, 5, 6];

// const findUniqueValues = (arr) => {
//     const uniqueArr = [];

//     for (let i = 0; i < arr.length; i++) {
//         let isDuplicate = false;

//         for (let j = 0; j < uniqueArr.length; j++) {
//             if (arr[i] === uniqueArr[j]) {
//                 isDuplicate = true;
//                 break;
//             }
//         }
//         if (!isDuplicate) {
//             uniqueArr.push(arr[i]);
//         }
//     }
//     return uniqueArr;
// }

//* using array method
const findUniqueValues = (arr) => {
    return arr.filter((value, index, array) => array.indexOf(value) === index);
};

const res = findUniqueValues(numbersWithDuplicates);
console.log(res);