//https://www.w3schools.com/jsref/dom_obj_event.asp
//https://www.w3schools.com/jsref/obj_event.asp

const heading = document.querySelector('#heading')
const addBtn = document.querySelector('#addBtn')
const deleteBtn = document.querySelector('#deleteBtn')
const addedElements = document.querySelector('#addedElements')
const paragraph = document.querySelector('#paragraph')



// Event Handler
// heading.onclick = () => {
//     console.log("Event Handler")
// }
// heading.onclick = () => {
   //// console.log("Message")
//}



// Event Listener
// e = event
heading.addEventListener("click", (e) => {
    console.log(e)
})
// heading.addEventListener("click", () => {
//     console.log("message 2")
// })

//  window.addEventListener("keypress",(e) =>{
//         console.log(e)

// })

window.addEventListener("keypress",(e) =>{
   if (e.code == "KeyP"){
    console.log("you pressed key P")}
})

//Mouseover event
heading.addEventListener("mouseover", () => {
    heading.style.color = "Blue"
})


//Mouseout event
heading.addEventListener("mouseout",() => {
    heading.style.color = "black"
})

//button that adds element to the DOM on click
    let newElement = ""
    addBtn.addEventListener("click",() => {
    newElement = document.createElement('h2')
    newElement.innerText = "Iam new element"
    //document.body.append(newElement)    (or)

    // use the div container for better results
    addedElements.append(newElement)

})

let newElements=''
addBtn.addEventListener('click',()=>{
    newElements=document.createElement('h3')
    newElements.innerHTML="hello hello"
    addedElements.append(newElements)
})

//Button that deletes the elements on click
deleteBtn.addEventListener("click", () => {
    addedElements.lastChild.remove()
 
})

//Task: 
// Research Events within JavaScript familiarising yourself with the different types of event we can make use of. 
//Put together 3-5 working examples event listeners triggering functionality in your webpage. 

//doubleclick
document.getElementById("myBtn").addEventListener("click", () => {
  document.getElementById("paragraph").innerHTML = Date();
});




