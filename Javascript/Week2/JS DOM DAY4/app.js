
//storing relevant elements from the DOM

const overlay = document.querySelector('#overlay')
const container = document.querySelector('.container')
const eventKey = document.querySelector('#eventKey')
const eventCode = document.querySelector('#eventCode')
const eventKeyCode = document.querySelector('#eventKeyCode')

window.addEventListener('keydown',(e) =>{
    // on keypress hide the overlay div
    overlay.style.display = "none"

    // on keypress show the container with info
    container.style.display = "flex"

    if(e.code === "space"){
        eventKey.innerText = "spacebar"
        eventCode.innerText = e.code
        eventKeyCode.innerText = e.keyCode
    }else{
        eventKey.innerText = e.key
        eventCode.innerText = e.code
        eventKeyCode.innerText = e.keyCode
    }

})

