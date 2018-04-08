function firstFactorial(num) {
    var previousNumbers = []
    for (var i=num; i>0; i--) {
        previousNumbers.push(i)
    }
    var factorial = previousNumbers.reduce(function(accumulator,currentValue) {
        return accumulator*currentValue
    })
    console.log(factorial)
}

firstFactorial(4)