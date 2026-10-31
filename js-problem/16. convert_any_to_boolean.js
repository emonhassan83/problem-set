/*
 * Convert any value to boolean
 *1. using !! in front of any value to convert to boolean
 *2. Or we can also use Boolean() to achieve same
 */

console.log(!!"hello"); //true
console.log(!!1); //true
console.log(!!0); //false
console.log(!!undefined); //false

//* method 02
console.log(Boolean("javascript")); //true
