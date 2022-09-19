function sumAll(arr) {
    let newArr = []
    for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
        newArr.push(i)
    }
    return newArr.reduce((a,b) => a+b)
}
  
sumAll([10, 5]);