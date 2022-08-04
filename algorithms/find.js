const inventory = [
    {name: 'apples', quantity: 2},
    {name: 'bananas', quantity: 0},
    {name: 'cherries', quantity: 5}
]

//1*
let searchedEl = inventory.find(getSearchEl);

function getSearchEl (element) {
    return element.name === 'apples'
}

// console.log('searchedEl', searchedEl.name)

//2*
// console.log('result', inventory.find((element) => element.name === 'bananas'))


//3*
function callBackResult (query) {
    function getSearchEl (element) {
        return element.name === query
    }
    return getSearchEl
}

// console.log('result', inventory.find(callBackResult('cherries')))

//4*

function callBackResult (query) {
  return inventory.find((element => element.name === query))
}

// console.log('callBackResult', callBackResult('apples'))

//5*

const dog = [
    {name: "apples", legs: 4}
]

let secondParam = inventory.find(getSecondParam,dog);

console.log('secondParam', secondParam)

function getSecondParam (element) {
    console.log('this', this);
    // return element.name === 'apples'
    return element.name === this.name;
}
