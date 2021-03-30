function hashMap(queryType, query) {
    let queryObject = {};
    for (let i=0; i<queryType.length; i++){
        if (queryType[i]==="insert") {
            let thisArray = query[i];
            queryObject[thisArray[0].toString()] = thisArray[1]
        }
        else if (queryType[i]==="addToValue") {
            Object.keys(queryObject).map(function(key, index) {
                queryObject[key] + query[i];
            });
        }
        else if (queryType[i]==="addToKey") {

        }
        else if (queryType[i]==="get") {
            
        }
    }
}

console.log(hashMap(["insert", "insert", "addToValue", "addToKey", "get"], [[1, 2], [2, 3], [2], [1], [3]]));