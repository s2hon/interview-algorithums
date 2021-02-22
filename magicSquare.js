/*
counter starts at N
Go through string and find palandrome */

function substrCount(n, s) {

    let result = 0;
    let result2 = 0;
    // console.log(n)
    for (i=1; i<n; i++) {
        if(s[i]===s[i+1]) {
            result++
            // console.log(result)
            for (j=2; j<n; j++) {
                if(s[1]===s[j]) {
                    result2++
                    console.log(result2)
                }
            }
        }
    }
    return result+result2+n
}

console.log(substrCount(4, "aaaa"));