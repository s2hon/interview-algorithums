//

function solution(N) {
    let binary = Number(N).toString(2);
    console.log(binary)
    if (binary.includes('0')){
        let binaryArry = binary.split('')
        let result = binaryArry.filter(num => num !== '0')
        if (result.length > 1 && binaryArry[length-1]!==0) {
            let zerosArry = binary.split('1')
            let zeros = zerosArry.filter(num => num !== '')
            let result = []
            for (let i=0; i<zeros.length; i++) {
                result.push(zeros[i].split('').length)
            }
            result = result.sort((a,b)=> b-a)
            return result[0]
        }
        else {
            return 0
        }
    }
    else {
        return 0
    }

}

console.log(solution(647))