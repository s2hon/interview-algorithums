function adjacentElementsProduct(inputArray) {
    let newArray = []
    for (let i=0; i<inputArray.length; i++) {
        newArray.push(inputArray[i]*inputArray[i+1])
    }
    newArray = newArray.slice(0,-1)
    return Math.max(...newArray)
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]))