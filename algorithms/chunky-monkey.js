function chunkArrayInGroups(arr, size) {
    let result = []
    for (let i = 0; i < arr.length; i+=size) {
      let data = arr.slice(i, i+size)
      result.push(data)
    }
      return result
  }
  
  chunkArrayInGroups(["a", "b", "c", "d"], 2);