function letterChanges(str) {
    var charCodes = []
    for (var i=0;i<str.length;i++) {
        if (str.charCodeAt(i) !== 32 && str.charCodeAt(i) !== 42 && isNaN(str[i])) {
            charCodes.push(str.charCodeAt(i)+1)
        }
        else {
            charCodes.push(str.charCodeAt(i))
        }
    }
    var newChars = charCodes.map(function(code) {
        return String.fromCharCode(code)
    })
    var capitalVowels = newChars.map(function(char) {
        if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
            return char.toUpperCase()
        }
        else {
            return char
        }
    })
    console.log(capitalVowels.join(''))
    return capitalVowels.join('')
}


//UIjt mpOh dblf@&
letterChanges('this long cake@&')