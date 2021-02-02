function longestCommonPrefix(strs) {
    let result = "";
    if (!strs || !strs.length) {
        return result
    }
    else {
        let filter = strs.filter(s => s !== "")
        if (!filter.length) {
            return 0
        }
        else {
        let word = strs.slice(0,1).toString();
        for (let i=0; i<word.length; i++) {
            for (let j=0; j<strs.length; j++) {
                if (strs[0][i] !== strs[j][i]) {
                    return result
                }
            }
            result += strs[0][i]
        }
    }
}
};

console.log(longestCommonPrefix([""]))