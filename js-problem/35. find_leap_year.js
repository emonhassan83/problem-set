/* 
* Write a function findLeapYear() that will take an array as the input parameter and will check if each year is a leap year. If a year is a leap year, insert that year in a new array. Return the new array and print the result. There is no need to return anything if there is no leap year found.

* input: [2023,2024,2025,2028,2030]
*/
const years = [2023, 2024, 2025, 2028, 2030];

function findLeapYear(arr) {
  let leapYears = [];

  for (let i = 0; i < arr.length; i++) {
    if (isLeapYear(arr[i])) {
      leapYears.push(arr[i]);
    }
  }

  if (leapYears.length > 0) {
    return leapYears;
  }
}

function isLeapYear(year) {
  return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
}

//* method 2
const findLeapYear2 = (arr) =>
  arr.filter(
    (year) => (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
  );

console.log(findLeapYear2(years));
