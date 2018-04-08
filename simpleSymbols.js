function simpleSymbols(str) {
    var matches = []
    var falseMatch = []
    for (var i=0; i<str.length; i++) {
        if (str[i].match(/[a-zA-Z]/)) {
            let prev = str[i-1]
            let next = str[i+1]
            if (prev === '+' && next === '+') {
                matches.push(true)
            }
            else {
                falseMatch.push(false)
            }
        }
    }
    if (falseMatch.length !== 0) {
        console.log(false)
    }
    else {
        console.log(true)
    }
}
// f++d+
// +d+=3=+s+
simpleSymbols('+d+=3=+s+')