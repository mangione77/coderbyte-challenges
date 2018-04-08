function letterCapitalize(str) {
    var wordArray = str.split(" ")
    var capitalized = wordArray.map(function(word) {
        return word.charAt(0).toUpperCase() + word.substring(1,word.length).toLowerCase()
    })
    return capitalized.join(' ')
}

letterCapitalize('hello world banana')