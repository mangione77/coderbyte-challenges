function simpleAdding(num) {
    var allNums = []
    for (var i=num; i>0; i--) {
        allNums.push(i)
    }
    var sum = allNums.reduce(function(accumulator,currentValue) {
        return accumulator+currentValue
    })
    return sum
}

simpleAdding(12)