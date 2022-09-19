function getIndexToIns(arr, num) {
    arr.push(num)
    arr.sort((a,b) => a - b)
    let result = arr.indexOf(num)
    return result;
  }
  
  getIndexToIns([10, 20, 30, 40, 50], 35);