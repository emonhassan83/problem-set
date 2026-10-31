/* 
* Task 10: Advanced Sorting
* Problem: Create an array of objects representing students with 'Name' and 'Grades' properties. Write a function to sort the students by average grade in descending order using only loops.
*/

const students = [
    { name: 'Alice', grades: [85, 90, 88] },
    { name: 'Bob', grades: [70, 75, 78] },
    { name: 'Charlie', grades: [95, 92, 93] },
    { name: 'Diana', grades: [80, 85, 82] }
];

const averageGrade = grades => grades.reduce((sum, grade) => sum + grade, 0) / grades.length;

const sortStudentsByAverageGrade = arr => arr.sort((a, b) => averageGrade(b.grades) - averageGrade(a.grades));

const res = sortStudentsByAverageGrade(students);
console.log(res);