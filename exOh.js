function ExOh(str) {
    var exes = []
    var os = []
    for (var i=0; i<str.length; i++) {
        if (str[i] === 'x') {
            exes.push(str[i])
        }
        else if (str[i] === 'o') {
            os.push(str[i])
        }
    }
    if (exes.length === os.length) {
        return true
    }
    else {
        return false
    }
}

ExOh('xxxooo')