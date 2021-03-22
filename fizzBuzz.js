function fizzBuzz(n) {
    //for loop since it is going to number n
    let answerArry = [];
    for (let i=1; i<=n; i++) {
        if (i%15 === 0) {
            answerArry.push("FizzBuzz");

        }
        else if (i%3 === 0) {
            answerArry.push("Fizz");
        }
        else if (i%5 === 0) {
            answerArry.push("Buzz")
        }
        else
            number = Number(i)
            answerArry.push(number)
    }
        return answerArry;
    }


    console.log(fizzBuzz(15))