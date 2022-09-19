function confirmEnding(str, target) {
    let result = str.substr(-target.length)
    // let result = str.slice(-target.length)
    // let result = str.slice(str.length - target.length)
    let a = result === target ? true : false
    return a;
  }
  
  confirmEnding("Bastian", "n");