let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Change this line
let result1 = extractStr.match(codingRegex); // Change this line
let result2= codingRegex.test(extractStr); // Change this line


console.log('result1', result1)
console.log('result2', result2)


// 'string'.match(/regex/);   >>>>> difference between match() vs test()
// /regex/.test('string');