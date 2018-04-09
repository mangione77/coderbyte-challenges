function wordCount(words) {
    var count = words.match(/\b(\w|')+\b/gim)
    return count.length
}

wordCount('Hello World')