function uniteUnique(...arr) {
    let newArr =arr.flat()
    return [...new Set(newArr)]
  }
  
  uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);