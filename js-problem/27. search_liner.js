/*
 * problem: linearSearch() function ti implement kore dhakao
 * input: linerSearch(['a', 'b', 'c', 'd', 'e'], 'c')
 *  output: 2 or 'not found!'
 */

function linearSearch(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return "not found!";
}

const res = linearSearch(["a", "b", "c", "d", "e"], "c");
console.log(res);
