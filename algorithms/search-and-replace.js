function myReplace(str, before, after) {
    let lowerCase = /[a-z]/g
    let indexEl = str.indexOf(before)
    let lowerCont = str.charAt(indexEl).match(lowerCase)
    let trueItem = lowerCont ? after.toLowerCase() 
    : `${after[0].toUpperCase()}${after.slice(1)}`  
    return (str.replace(before, trueItem))
  }
  
  // myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
  
  // myReplace("I think we should look up there", "up", "Down")
  
  myReplace("His name is Tom", "Tom", "john")