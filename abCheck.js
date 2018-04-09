function ABCheck(str) {
    var newStr = str.toLowerCase()
    for (var i=0; i<newStr.length; i++) {
        if (newStr[i] === 'a' && newStr[i+4] === 'b') { console.log(true) }
        else { return console.log(false)}
    }
}

ABCheck('Laura sobs')