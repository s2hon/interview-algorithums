function lengthOfLastWord (s) {
    if (!s.length) {
        return 0
    }
    else {
        let sArray = s.split(" ")
        let filter = sArray.filter(s => s !== "")
        if (!filter.length) {
            return 0
        }
        else {
            let lastIndex = filter.length - 1
            return filter[lastIndex].length
        }
    }
};

console.log(lengthOfLastWord("       "))