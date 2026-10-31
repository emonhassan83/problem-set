//* kivabe Array theke duplicate number gulo ke ber korte pari ?
const number = [1, 4, 5, 5, 6, 7, 6, 8, 9, 10, 4];

const duplicates = number.filter(function (value, index, array) {
  return array.indexOf(value) !== index;
});

// const duplicates = number.filter((value, index, array) => array.indexOf(value) !== index);

console.log(duplicates);

//* kivabe Array theke uniqe number gulo ke ber korte pari ?
const number2 = [1, 4, 5, 5, 6, 7, 6, 8, 9, 10, 4];

/* const unique = number2.filter(function (value, index, array) {
    return array.indexOf(value)  === index
}); */
const unique = number2.filter(
  (value, index, array) => array.indexOf(value) === index
);

console.log(unique);
