function bouncer(arr) {
    let newArr = []
    arr.map(item => item ? newArr.push(item): null)
    return newArr;
  }
  
bouncer([7, "ate", "", false, 9]);