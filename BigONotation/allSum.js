/* Suppose we want to write a function that calculates sum of all numbers from 1 up to some number n */

function addAll (n) {
    let total = 0;
    for (let i=0; i<=n; i++) {
        total += i
    }
    return total
}

function addAll2 (n) {


}

console.log(addAll(3))
