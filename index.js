enterButton = document.getElementById('enterButton')

enterButton.addEventListener('click', function() {
    if (document.getElementById('roomInputDIV').style.display = 'block')
    document.getElementById('roomInputDIV').style.display = 'none';
    document.getElementById('room').style.display = 'block'
    document.getElementById('header').textContent = "Room #246b"
})