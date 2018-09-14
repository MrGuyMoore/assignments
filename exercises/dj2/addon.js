var display = document.getElementById('time-display')

function getTime() {
    var now = new Date()
    var hour = now.getHours()
    var min = now.getMinutes()
    var sec = now.getSeconds()

    display.textContent = `${hour}:${min}:${sec}`
}
var timeIntervalID = setInterval(getTime, 1000);