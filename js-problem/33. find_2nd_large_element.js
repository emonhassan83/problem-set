/* 
* You will be given an array as input containing 5 integer numbers. Your task is very simple. You have to find out the second largest element from the numbers.

* Sample Input: [10,33,5,99,6]
*/

const arr = [10, 33, 5, 99, 6];

function findSecondLargestElem(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        let tmp = arr[j];
        arr[j] = arr[i];
        arr[i] = tmp;
      }
    }
  }
  return arr[1];
}

//* using sort function
// const findSecondLargestElem = (arr) => {
//   arr.sort((a, b) => b - a);
//   return arr[1]; // Return the element at index 1 (second largest)
// };

console.log("Second largest number of array: ", findSecondLargestElem(arr));
