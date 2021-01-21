//split
//reverse
//join


function isPalindrome(x) {
    if (x<0) {
        return false;
    }
    else {
        let xArry = x.toString().split("");
        console.log(xArry)
        let reverse = xArry.reverse().join("")
        if (reverse === x.toString()){
            return true
        }
        else {
            return false
        }
    }
};

function isPalindrome(x) {
    if (x < 0) return false

    let reversed = 0, y = x

    y=405
    while (y > 0) {
        const lastDigit = y % 10
        y = (y / 10) | 0
        reversed = (reversed * 10) + lastDigit
    }
    return x === reversed
}