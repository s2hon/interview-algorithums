/*
A string is called balanced when every letter occurring in the string, appears both in upper-and lowercase. For example, the string "CATattac" is balanced ('a', 'c'and T occur in both cases), but "Madam" is not ('d' and 'a' appear only in lowercase). 

Examples: 1. Given S = 'azABaabza", the function should return 5. The shortest balanced fragment of Sis "ABaab". 
2. Given S = 'TacoCat", the function should return-1. There is no balanced fragment. 
3. Given S = "AcZcbaBz", the function should return 8. The shortest balanced fragment is the whole string. 
4. Given S = "abcdefghijklmnopqrstuvwxyz", the function should return -1. 
string S consists only of letters ('a'-'Z' and/or A - Z). 

*/

function solution(S) {
    let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let lowerArr = upper.toLowerCase().split("")
    let upperArr = upper.split("")

    let givenUpper = [];
    let givenLower = [];
    let result = [];

    let givenArr = S.split("")

    for (let i=0; i<givenArr.length; i++) {
        for (let j=0; j<lowerArr.length; j++) {
            if (givenArr[i] === lowerArr[j]) {
                givenLower.push(lowerArr.indexOf(lowerArr[j]))
            }
        }
    }

    for (let i=0; i<givenArr.length; i++) {
        for (let j=0; j<upperArr.length; j++) {
            if (givenArr[i] === upperArr[j]) {
                givenUpper.push(upperArr.indexOf(upperArr[j]))
            }
        }
    }

    for (let i=0; i<givenLower.length; i++) {
        for (let j=0; j<givenUpper.length; j++) {
        
            if (givenLower[i] !== givenUpper[j]) {
                givenLower.splice(givenLower.indexOf(givenLower[i]),0,givenLower[i])
            }
        }
    }

    

    console.log(givenLower)
    console.log(givenUpper)
}

console.log(solution("azABaabza"))