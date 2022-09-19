function palindrome(str) {
    let word = str.replace(/[^0-9a-z]/gi, '').toLowerCase()
    let lengthWord = word.split("").length
    let reverseWord = ""
    for (let i = lengthWord-1 ; i >= 0; i--) {
      reverseWord += word[i]
    }
    return word === reverseWord ? true : false;
  }
  
  palindrome("0_0 (: /-\ :) 0-0");