function repeatStringNumTimes(str, num) {
    let result = str
    if (num <= 0) {
      return "";
    } else {
      for (let i = 1; i < num; i++) {
        result += str
      }
      return result
    }
  }
  
  repeatStringNumTimes("abc", 3);