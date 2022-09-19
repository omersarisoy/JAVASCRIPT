let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/;
let result1 = extractStr.match(codingRegex);
let result2= codingRegex.test(extractStr);


console.log('result1', result1)
console.log('result2', result2)


// 'string'.match(/regex/);   >>>>> difference between match() vs test()
// /regex/.test('string');