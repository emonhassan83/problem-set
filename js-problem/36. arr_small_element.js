/* 
* Suppose, you have an array with 5 elements. Find the smallest element of that array.

* Sample Input: [10,33,5,99,6]
*/
const numbers = [10, 5, 20, 15, 25];

function findSmallest(arr) {
    let smallest = arr[0];

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < smallest) {
        smallest = arr[i];
      }
    }
    return smallest;
  }
  
console.log('The smallest number of array: ',findSmallest(numbers));


//* shortcut method
const smallest = Math.min(...numbers);