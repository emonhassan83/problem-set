const array = [1, 2, 3, 4, 5];

//* method: 01.temp variable
const temp = array[0];
array[0] = array[4];
array[4] = temp;

console.log(array);

//* method: 02.array destructuring
[array[0], array[4]] = [array[4], array[0]];
console.log(array);
