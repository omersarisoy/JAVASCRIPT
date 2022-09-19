function nextInLine(arr, item) {
  arr.push(item);
  const removed = arr.shift()
  return removed;
}
const testArr = [3,4,5,7];

console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr,1));
console.log("After: " + JSON.stringify(testArr));

// JAVASCRIPT git:(main) ✗ ls        
// README.md  algorithms entrance   index.html index.js
// ➜  JAVASCRIPT git:(main) ✗ cd algorithms 
// ➜  algorithms git:(main) ✗ node stand-in-line.js 