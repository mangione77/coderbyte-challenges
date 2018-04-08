function timeConvert(date) {
    var hours = Math.floor((date / 60))
    var minutes = date % 60
    return (hours.toString() + ":" + minutes.toString())
}

console.log(timeConvert(60))