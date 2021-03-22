function alphabeticShift(inputString) {
    //need to split the word
    // for loop and go through the character
    //find charcode and +1
    //print the next letter
    let inputArry = inputString.split("");
    console.log(inputArry);
    for (let i=0; i<inputArry.length; i++) {
        //because it can be a or z we need to make sure charcode doesn't go over or under the range of alphabet so we need to find the pure number out of 26
        let x = inputArry[i].charCodeAt() - 97;
        console.log(x)
        //still add one
        x=(x+1)%26
        //add back in the number from a
        inputArry[i] = String.fromCharCode(x+97)

    }
    return inputArry.join("")
    }
    
    console.log(alphabeticShift('crazy'));