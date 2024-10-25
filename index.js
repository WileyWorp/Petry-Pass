const enterButton = document.getElementById('enterButton')
const requestButton = document.getElementById('requestButton')

enterButton.addEventListener('click', function() {
    if (document.getElementById('roomInputDIV').style.display = 'block')
    document.getElementById('roomInputDIV').style.display = 'none';
    document.getElementById('room').style.display = 'inline-flex'
    document.getElementById('header').textContent = "Room #202"
})

requestButton.addEventListener('click', function() {
    alert("Your request has been sent.")
})

document.getElementById('header').addEventListener('click', function() {
    location.replace("./tView")
    // location.replace("https://wileyworp.github.io/Petry-Pass/tView/")
})

let minutes = 0;
let seconds = 0;
let accepted = false;
export { accepted };
if (accepted == true) {
setInterval(function() {
    seconds += 1
    if (seconds < 10) {
        secondsUpdated = "0" + seconds
    } else {
        secondsUpdated = seconds
    }
    if (seconds == 60) {
        seconds = 0
        minutes += 1
        document.getElementById('timer').innerHTML = minutes + ":" + secondsUpdated
    } else {
        document.getElementById('timer').innerHTML = minutes + ":" + secondsUpdated
    }
}, 1000)
}