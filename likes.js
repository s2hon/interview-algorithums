//create the text that should be displayed next to such an item.
function likes ({ names }) {
    let names = names || [];
    switch (names.length) { 
        case !names.length :
            return 'no one likes this'
        case names.length = 1 :
            return names[0] + 'likes this'
        case names.length = 2 :
            return names[0] + 'and' + names[1] + 'likes this'
        case names.length = 3 :
            return names[0] +','+ names[1] + 'and' + names[2] + 'likes this'
        default:
            return names[0] + names[1] + 'and' + names.length - 2 + 'likes this'
    }
}