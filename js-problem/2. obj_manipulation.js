/*
 * 2. Task: Object Manipulation
 * Create An Array Of Objects Representing Books With Properties Like Title, Author, And Year. Write A Function That Takes The Array And Returns A New Array With Only The Book Titles. Print The Result.
 */

const books = [
  { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { title: "1984", author: "George Orwell", year: 1949 },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
  { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 },
];

// const getBooksTitle = (arr) => {
//   const titlesArr = [];

//   for (let i = 0; i < arr.length; i++) {
//     titlesArr.push(arr[i].title);
//   }

//   return titlesArr;
// };

//* using array methods
const getBooksTitle = (arr) => {
  return arr.map((books) => books.title);
};

const res = getBooksTitle(books);
console.log(res);
