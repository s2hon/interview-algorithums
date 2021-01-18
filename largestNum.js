//Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
let x = 42145
let arry = []
function largeNum (x) {
    // let xArr = Array.from(String(x), Number)
    x = x.toString()
    for (let i=0; i<x.length; i++) {
    arry.push(x[i]);
    }
    console.log(arry);
    arry.sort((a,b) => b-a);
    let newNum = arry.join("")
    return +newNum
}

function descendingOrder(n){
    let xArr = Array.from(String(n), Number)
    xArr.sort((a,b) => b-a);
    let newNum = xArr.join("")
    return +newNum
}

console.log(largeNum(x))