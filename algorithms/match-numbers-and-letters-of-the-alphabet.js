let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/ig;
let myRegex2 = /[h-s2-6]/i;
let result = quoteSample.match(myRegex);
let result2 = quoteSample.match(myRegex2);
console.log('result', result)
console.log('result', result2)