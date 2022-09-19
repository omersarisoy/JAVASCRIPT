function dropElements(arr, func) {
    let trueIndex = arr.filter(i => func(i))[0]
    let firstIndex = arr.indexOf(trueIndex)
    return firstIndex > -1 ? arr.slice(firstIndex) : []
   }
   
   dropElements([1, 2, 3], function(n) {return n > 0;});