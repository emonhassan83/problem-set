/*
 * 4. Task: Sorting Objects
 * Create An Array Of Objects Representing Cars With Properties Like Make, Model, And Year. Write A Function To Sort The Array Of Cars By The Year Of Manufacture In Ascending Order. Print The Sorted Array.
 */

const cars = [
  { make: "Toyota", model: "Corolla", year: 2020 },
  { make: "Honda", model: "Civic", year: 2018 },
  { make: "Ford", model: "Mustang", year: 2021 },
  { make: "Chevrolet", model: "Camaro", year: 2019 },
];

// const sortCarsByYear = (arr) => {
//     return arr.sort(function(a, b) {
//         return a.year - b.year;
//     });
// }

//* using two pointer methods
const sortCarsByYear = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i].year > arr[j].year) {
        let tmp = arr[j];
        arr[j] = arr[i];
        arr[i] = tmp;
      }
    }
  }
  return arr;
};

const res = sortCarsByYear(cars);
console.log(res);
