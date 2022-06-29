function nextInLine(arr, item) {
  // Only change code below this line
  arr.push(item);
  const removed = arr.shift()
  return removed;
  // Only change code above this line
}

// Setup
const testArr = [3,4,5,7];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr,1));
console.log("After: " + JSON.stringify(testArr));

// JAVASCRIPT git:(main) ✗ ls        
// README.md  algorithms entrance   index.html index.js
// ➜  JAVASCRIPT git:(main) ✗ cd algorithms 
// ➜  algorithms git:(main) ✗ node stand-in-line.js 