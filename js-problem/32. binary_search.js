/* 
* Complete the function called count_zero() which will take a binary string (Binary string is a string which consists of only 0 and 1) as a parameter and count how many 0’s are there in that string.

* sample input: 10101
* output: 2
*/

// function count_zero(binary_string) {
//     const zeroCount = binary_string.split("0").length - 1;
//     return zeroCount;
// }

// const count_zero = (binary_string) => binary_string.split("0").length - 1;

//* another way
function count_zero(binary_string) {
  let count = 0;
  for (let i = 0; i < binary_string.length; i++) {
    if (binary_string[i] === "0") {
      count++;
    }
  }
  return count;
}

console.log("Return zero amount of input: ", count_zero(10101));
