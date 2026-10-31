//* 1-100 porjonto kon sonkhagulo 3,5 and 3 0 5 uvoy dara bivajjo ta ber koro ?

function fizzBuzz(number) {
  for (let i = 1; i <= number; i++) {
    if (i % 15 === 0) {
      console.log(`${i} is FizzBuzz`);
    } else if (i % 3 === 0) {
      console.log(`${i} is Fizz`);
    } else if (i % 5 === 0) {
      console.log(`${i} is Bizz`);
    } else {
      console.log(i);
    }
  }
}

fizzBuzz(100);