/* 
  * 5. Task: Find And Modify
  * Write A Function That Searches An Array Of Objects For A Specific Person By Name. If Found, Modify Their Age Property. Print The Updated Array.
  */
  
const person = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 20 },
    { name: 'Diana', age: 28 }
];

// const findAndModifyAge = (arr, name, age) => {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i].name === name) {
//             arr[i].age = age;
//             break;
//         }
//     }
//     return arr;
// }

//* using array find method
const findAndModifyAge = (arr, name, age) => {
    const person = arr.find(person => person.name === name);
    if (person) {
        person.age = age;
    }
    return arr;
}

const res = findAndModifyAge(person, 'Alice', 30);
console.log(res);