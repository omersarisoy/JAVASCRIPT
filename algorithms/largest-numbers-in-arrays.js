function largestOfFour(arr) {
    let lengest = arr.map(item => Math.max(...item))
    return lengest;
  }
  
  largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]])