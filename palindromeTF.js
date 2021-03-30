function checkPalindrome(inputString) {
    let middle = Math.round(inputString.length/2);

    if (inputString.length%2 === 0) {
        if (inputString[middle] !== inputString[middle-1]) {
            return false 
        }
    }
    
    for (let i=0; i<=middle; i++) {
        if (inputString[i] !== inputString[inputString.length-1-i]) {
            return false
        }
    }
    return true
}

    console.log(checkPalindrome("zzzazzazz"))