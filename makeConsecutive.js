function makeArrayConsecutive2(statues) {
    let sorted = statues.sort((a,b)=>a-b)
    let needed = 0
    for (let i=0; i<sorted.length-1; i++) {
        console.log(sorted[i+1]-sorted[i])
        if (sorted[i+1]-sorted[i]!==1) {
            needed = needed+((sorted[i+1]-sorted[i])-1)
            console.log(needed)
        }
    }
    return needed
}

console.log(makeArrayConsecutive2([6, 2, 3, 8]));