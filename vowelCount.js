function vowelCount(str) {
    var letterArray = str.toLowerCase().split("")
    var counter = 0    
    for (var i=0; i<letterArray.length; i++) {
        if (letterArray[i] === 'a' || letterArray[i] === 'e' || letterArray[i] === 'i' || letterArray[i] === 'o' || letterArray[i] === 'u') {
            ++counter
        }
    }
    return counter
}

vowelCount('hello')