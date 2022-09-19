function isPrime(num) {
    if(num < 2) return false;
    for (var i = 2; i < num; i++) {
        if(num%i==0)
            return false;
    }
    return true;
}

function sumPrimes(num) {
  let primeArr = []
  for(var i = 0; i <= num; i++){
    if(isPrime(i)) primeArr.unshift(i);
  }
  return primeArr.reduce((a,b) => a + b )

}
sumPrimes(977);