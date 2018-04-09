function timeConvert(date) {
    var hours = Math.floor((date / 60))
    var minutes = date % 60
    var str = hours + ":" + minutes
    return str
}

console.log(timeConvert(60))