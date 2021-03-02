function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    if (A.length === 0 ) return 1
    let sumA = A.reduce((sumA, i) => sumA + i)
    let needSumA = (A.length + 1) * (A.length + 2) / 2
    return needSumA - sumA
}

console.log(solution([2,3,1,5]))
