/*
* reverse words char in a string like input: "I love Bangladesh" output:"I evol hsedalgnaB"
* Input: "I love Bangladesh"
* output: "I evol hsedalgnaB"
 */

const str = "I love Bangladesh";

function reverseWords(string) {
  const stringAsArray = string.split(" "); //* [ 'I', 'love', 'Bangladesh' ]

  const result = stringAsArray.map((str) => {
    return str.split("").reverse().join(""); //* [ 'I', 'evol', 'hsedalgnaB' ]
  });

  return result.join(" ");
}

console.log(reverseWords(str));