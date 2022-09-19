const squareList = arr => {
    return arr.filter(num => num > 0 && num % parseInt(num) === 0).map(i => Math.pow(i,2))
};
  
const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);
  