function solution(S, K) {
    let days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
    let givenIndex = days.indexOf(S)
    let finalIndex = (givenIndex+K)%7
    return days[finalIndex]

}

console.log(solution("Wed", 2))