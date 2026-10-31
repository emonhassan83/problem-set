/*
 * How to flatten a multi-dimensional array
 * we use array.flat() method to flatten a multi-dimensional array
 */

const friends = ["friend1", "friend2", ["friend3", "friend4"], "friend5"];
console.log(friends.flat());

//* Multi-dimensional level array
const friend2 = [
  "friend1",
  ["friend2", ["friend3", "friend4"], "friend5"],
  "friend6",
];

//* We can pass "Infinity" parameter to array.flat function
console.log(friend2.flat(Infinity));
