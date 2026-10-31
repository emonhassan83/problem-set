//* ludu khalay kivabe 1 theke 6 number porjonto randomly print korte pari?

function getRadomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRadomNumber(1, 6));