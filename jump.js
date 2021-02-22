function solution(X, Y, D) {
    // write your code in JavaScript (Node.js 8.9.4)
    let result = 0
    while (X < Y) {
        X=X+D
        result++
    }
    return result
}