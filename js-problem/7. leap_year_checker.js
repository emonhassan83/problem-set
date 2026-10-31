/*
 * Task 7: Leap Year Checker
 * Problem: Write a function that determines whether a given year is a leap year.
 */

const isLeapYear = (year) => {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  } else {
    return false;
  }
};

const year = 1700;

const res = isLeapYear(year);
console.log(res);
