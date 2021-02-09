function solution(A) {
    let B = A.sort((a,b)=>a-b)
    let lastNum = B[B.length-1]
    if (lastNum < 0) {
        return 1
    }
    else {
        let result = [];
        for (let i=1; i<B.length; i++) {
            if (B[i] - B[i-1]!==1) {
                result.push(B[i]-1)
            }
        }
        if (result !== undefined) {
            result = result.filter(num => num !== 0)
            return result[0]
        }
        else {
            B.length+1
        }

    }

}

console.log(solution([1,2,3]))