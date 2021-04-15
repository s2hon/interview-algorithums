function almostIncreasingSequence(sequence) {
    
    // for (let i=0; i<sequence.length; i++) {
    //     if (sequence[i]>sequence[i+1]) {
    //         if (sequence.length - sequence[i+1] > 1) {
    //             return false
    //         }
    //         else return true
    //     }
    // }

    let difference = 0
    let i=0; 
    while (i<sequence.length) {
            if(sequence[i] > sequence[i+1] || sequence[i] === sequence[i+1] ) {
                sequence.splice(i,1)
                difference++
            }
        }

    if (difference === 1) {
        return true
    }
    else return false


}

console.log(almostIncreasingSequence([1, 4, 10, 4, 2]))
