// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {
    // write your code in JavaScript (Node.js 8.9.4)
    // number becomes big if I insert the number 5 where it is smaller (index -1) than 5 for +
    // - is opposite (index +1)
    //need to change to an array
    if (N>0){
        let remainder = N%10
        if (remainder!==0){
        let numArray = Array.from(N.toString()).map(Number)
        let index;
        let result;
        for (let i=0; i<numArray.length; i++){
            if (5<numArray[i]){
                index = numArray.indexOf(numArray[i])
                index > 0 ? index-1 : index
                break;
            }
            break;
        }
        numArray.splice(index, 0, 5)
        result = parseInt(numArray.join(""))
        }
        else{
        let numArray = Array.from(N.toString()).map(Number)
        numArray = numArray.splice(numArray.length-1, 1)
        let index;
        for (let i=0; i<numArray.length; i++){
            if (5<numArray[i]){
                index = numArray.indexOf(numArray[i])
                index > 0 ? index-1 : index
                break;
            }
            break;
        }
        numArray.splice(index, 0, 5)
        numArray.splice(numArray.length, 0, 0)
        result = parseInt(numArray.join(""))
        }
        return result
    }
    else if (N===0) {
        return 50
    }
    else {
        let positive = Math.abs(N)
        let remainder = positive%10
        if (remainder!==0){
        let numArray = Array.from(positive.toString()).map(Number)
        let index;
        let result;
        for (let i=0; i<numArray.length; i++){
            if (5<numArray[i]){
                index = numArray.indexOf(numArray[i])
                index > 0 ? index-1 : index
                break;
            }
            break;
        }
        numArray.splice(index, 0, 5)
        result = parseInt(numArray.join(""))
        }
        else{
        let numArray = Array.from(positive.toString()).map(Number)
        numArray = numArray.splice(numArray.length-1, 1)
        let index;
        for (let i=0; i<numArray.length; i++){
            if (5<numArray[i]){
                index = numArray.indexOf(numArray[i])
                index > 0 ? index-1 : index
                break;
            }
            break;
        }
        numArray.splice(index, 0, 5)
        numArray.splice(numArray.length, 0, 0)
        result = parseInt(numArray.join(""))
    }
    return result
}
}


console.log(solution(100))