function ArithGeo(arr) {
    var reducer = arr.reduce(function(accumulator,currentValue) {
        return accumulator+currentValue
    })
}

ArithGeo([5,10,15])