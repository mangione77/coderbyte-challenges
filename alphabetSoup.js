function alphabetSoup(str) {
    var letterArray = str.split("")
    var alphabeticalOrder = letterArray.sort()
    return alphabeticalOrder.join("")
}

alphabetSoup('coderbyte')