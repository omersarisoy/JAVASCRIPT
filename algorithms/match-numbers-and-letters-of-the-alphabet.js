let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/ig; // Change this line
let myRegex2 = /[h-s2-6]/i; // Change this line
let result = quoteSample.match(myRegex); // Change this line
let result2 = quoteSample.match(myRegex2); // Change this line
console.log('result', result)
console.log('result', result2)