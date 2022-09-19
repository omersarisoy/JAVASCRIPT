function diffArray(arr1, arr2) {
    const fullArr = arr1.concat(arr2);
    const newArr = []
  
    fullArr.map(item => {
      if(arr1.indexOf(item) < 0) {
        newArr.push(item)
      } 
      if(arr2.indexOf(item) < 0) {
        newArr.push(item)
      } 
    })
    console.log(newArr)
    return newArr;
  }
  
  diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);