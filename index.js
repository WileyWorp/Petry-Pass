enterButton = document.getElementById('enterButton')
requestButton = document.getElementById('requestButton')

enterButton.addEventListener('click', function() {
    if (document.getElementById('roomInputDIV').style.display = 'block')
    document.getElementById('roomInputDIV').style.display = 'none';
    document.getElementById('room').style.display = 'block'
    document.getElementById('header').textContent = "Room #202"
})

requestButton.addEventListener('click', function() {
    alert("Your request has been sent.")
})

document.getElementById('header').addEventListener('click', function() {
    location.replace("./teacherView/index.html")
})