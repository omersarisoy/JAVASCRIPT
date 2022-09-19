function findLongestWordLength(str) {
    let lengths =  str.split(" ").map(item => item.length)
    let result = Math.max(...lengths)
    return result;
  }
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");