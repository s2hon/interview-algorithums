function solution(A, B) {
    // write your code in JavaScript (Node.js 8.9.4)
    //keep track of characters
    let wordA = 0;
    let wordB = 0;
    //create an array of all alphabets 
    let arr = new Array(26)
    arr.fill(0,0,26)
    //count characters in first string
    for (let i=0; i<A.length; i++) {
        arr[A[i].charCodeAt() - 'a'.charCodeAt()]++;
        wordA ++
        (console.log(wordA))
    }
    //count characters in secon string
    for (let i=0; i<B.length; i++) {
        if(arr[B[i].charCodeAt() - 'a'.charCodeAt()]){
            arr[B[i].charCodeAt() - 'a'.charCodeAt()]--;
            wordA --;
        }
        else wordB++;
        
    }
    return wordA + wordB

    
}

console.log(solution('rather', 'harder'))