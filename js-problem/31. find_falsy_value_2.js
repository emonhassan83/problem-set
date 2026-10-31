//* Object theke "false value" kibabe khuje bad dite pari?

const person = {
  a: "Emon",
  b: undefined,
  c: "Emon Hassan",
  d: false,
  e: "",
  f: "apple",
  g: 40,
  h: "k",
  i: true,
  j: "Thanks all",
  k: NaN,
};

const truthyObject = function (object) {
  for (let key in object) {
    if (!object[key]) {
      delete object[key];
    }
  }
  return object;
};

const res = truthyObject(person);
console.log(res);
