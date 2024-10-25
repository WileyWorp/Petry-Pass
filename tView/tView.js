import { accepted } from "../index.js";
document.getElementById("headerDIV").style.color = "red";
document.getElementById('header').addEventListener('click', function() {
    location.replace("/")
    // location.replace("https://wileyworp.github.io/Petry-Pass/")
})

document.getElementById('acceptButton').addEventListener('click', function() {
    document.getElementById('h1').textContent = "Pass granted to WILEY"
    setTimeout(function() {
        document.getElementById('h1').textContent = "Awaiting request..."
    }, 2500)
    accepted = true
})

document.getElementById('denyButton').addEventListener('click', function() {
    document.getElementById('h1').textContent = "Pass denied to WILEY"
    setTimeout(function() {
        document.getElementById('h1').textContent = "Awaiting request..."
    }, 2500)
    accepted = false
})