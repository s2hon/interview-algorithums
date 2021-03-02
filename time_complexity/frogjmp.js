/* https://app.codility.com/programmers/lessons/3-time_complexity/frog_jmp/ */

function solution(X, Y, D) {
    // write your code in JavaScript (Node.js 8.9.4)
    let result = 0;
    while (X < Y) {
        result++
        X=X+D
    }
    return result
}

function solution2(X, Y, D) {
    // write your code in JavaScript (Node.js 8.9.4)
    return Math.ceil((Y-X)/D)
}

console.log(solution2(10,85,30))