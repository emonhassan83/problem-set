//* Know performance of task

const startTime = performance.now();

for (let i = 0; i <= 50; i++) {
  console.log(i);
}

const endTime = performance.now();
console.log(`Loop took ${endTime - startTime} milliseconds to finish`);