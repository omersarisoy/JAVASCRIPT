let count = 0;

function cc(card) {
  var regEx = /[JQKA]/;
  if (card > 1 && card < 7) {
    count++;
  } else if (card === 10 || regEx.test(card)) {
   count--;
  }
  if (count > 0) {
      return count + " Bet"
  } 
      return count + " Hold"
};

cc(2); cc(3); cc(7); cc('K'); cc('A');
console.log('result', cc(2))