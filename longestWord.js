function longestWord(sen) {
    var words = sen.split(' ')
    var lengths = []
    for (var i=0;i<words.length; i++) {
        lengths.push(Number(words[i].length))
    }
    let longestLength = Math.max.apply(null, lengths)
    let indexOfLongestWord = lengths.indexOf(longestLength)
    let longest_word = words[indexOfLongestWord]
    return longest_word
}

longestWord('I love dogs')