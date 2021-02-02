function validBraces(braces){

    for (let i=0; i<braces.length; i++) {
        let neg = ++i
        if (braces[i] === "{" || "(" || "["){
            if (braces.length-neg === "}" || ")" || "]") {
            }
            else return false
        }
        else return false
        return true
    }
    
}