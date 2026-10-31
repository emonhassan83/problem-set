/*
 * 1. Task: Array Filtering And Mapping
 * Create An Array Of Objects, Each Representing A Person With Properties Like Name, Age, And Gender. Write A Function To Filter Out All Females And Then Map The Remaining People To An Array Of Names. Print The Final Result.
 */

const people = [
  { name: "Alice", age: 25, gender: "female" },
  { name: "Bob", age: 30, gender: "male" },
  { name: "Charlie", age: 20, gender: "male" },
  { name: "Diana", age: 28, gender: "female" },
  { name: "Eve", age: 35, gender: "female" },
];

// const filterMappingArray = (arr) => {
//   const namesArr = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].gender === "male") {
//       namesArr.push(arr[i].name);
//     }
//   }
//   return namesArr;
// };

//* using array method
const filterMappingArray = (arr) => {
  return arr
    .filter((person) => person.gender === "male")
    .map((person) => person.name);
};

const res = filterMappingArray(people);
console.log(res);
