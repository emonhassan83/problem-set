/*
 * find the copy element of emojis
* Input: ["🍔", "👍", "🍔", "🍀", "🍔", "👍", "👏", "🤎", "🍀"]
* Output: 
*/

const emojis = ["🍔", "👍", "🍔", "🍀", "🍔", "👍", "👏", "🤎", "🍀"];

function countDuplicates(data) {
  const output = {};

  data.map((d) => {
    output[d] = (output[d] || 0) + 1;
  });

  return output;
}

console.log(countDuplicates(emojis));
