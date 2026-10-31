/*
 * Remove false values from any array. */

let miscellaneous = [
  "Abul",
  false,
  "kabule",
  NaN,
  0,
  undefined,
  "Dabule",
  null,
  "",
  "Habule",
];

let fruits = miscellaneous.filter(Boolean);
console.log(fruits);

//* Boolean (expression) in JS returns true/false.
Boolean(5 < 6); // true
Boolean(5 > 6); // false
Boolean("javascript"); // true
Boolean(""); //false
