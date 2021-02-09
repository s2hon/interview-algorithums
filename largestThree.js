var maximumProduct = function solution(nums) {
    // write your code in JavaScript (Node.js 8.9.4)
    //sort array
    let possible = [];
    let A = nums.sort((a,b)=> b-a)

    for (let i=2; i<A.length; i++){
        possible.push(A[0]*A[1]*A[i])
    }
    for (let i=0; i<A.length-2; i++){
        possible.push(A[A.length-1]*A[A.length-2]*A[i])
    }
    return Math.max(...possible)

}

var maximumProduct = function solution(nums) {
    // write your code in JavaScript (Node.js 8.9.4)
    //sort array
    let A = nums.sort((a,b)=> a-b)

    return Math.max(A[0]*A[1]*A[A.length-1], A[A.length-1]*A[A.length-2]*A[A.length-3])

}