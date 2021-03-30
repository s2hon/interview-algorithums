function boundedRatio(a, l, r) {
    let answerArry = [];
    for (let i=0; i<a.length; i++){
        let x = a[i]/(i+1)
        console.log(x)
        if (l<=x && x<=r && x%1===0) {
            answerArry.push(true)
        }
        else {
            answerArry.push(false)
        }
        console.log(answerArry);
    }
    return answerArry
}

console.log(boundedRatio([8, 5, 6, 16, 5],1,3))