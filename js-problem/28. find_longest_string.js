//* kono Array theke kivabe sobtheke boro 'string' khuje ber korben and tar index number deakhben ?

const strings = [
  "Will Smith",
  "Johnny Depp",
  "Adam Sandler",
  "Vin Diesel",
  "Jackie Chan",
  "Morgan Freeman",
  "Robin Williams",
  "Angelina Jolie",
  "Brad Pitt",
  "Jim Carrey",
];

function longestString(strings) {
  let longestWord = "";

  for (str of strings) {
    if (str.length > longestWord.length) {
      longestWord = str;
    }
  }
  
  return [longestWord, strings.indexOf(longestWord)];
}

console.log(longestString(strings));

//* shortcut way
// const longestString = strings.reduce((longest, current) => {
//   return current.length > longest.length ? current : longest;
// }, "");

// console.log(longestString);
