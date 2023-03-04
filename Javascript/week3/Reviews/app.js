//local reviews data
    const reviews = [
    {
        id : 1,
        name: "Ruby Wilson",
        job: "Frontend Developer",
        img:"./exp1.jpeg",
        text:"Excellent, working with web designer express was great.  Thanks to their knowledge and determination our website looks great and functions really good.  I am recommend anyone that is looking for a custom website to give them a call and speak to Gus, he will guide you to the right direction."
},
{
    id : 2,
    name: "Hannah Trigeny",
    job: "Web Developer",
    img:"./person3.jpeg",
    text:"Web Developer experience in designing and developing user interfaces,testing, debugging and training staff within ecommerce technologies.Proven ability in optimizing web functionalities that improve data retrieval and workflow efficiencies. "
},
{
    id : 3,
    name: "Rachel Pat",
    job: "Backend Developer",
    img:"./person4.jpeg",
    text:"Design, develop, troubleshoot, debug, test, ensure browser compatibility, and implement website code by using Microsoft SQL Server and Microsoft .NET, C#, and ASP.NET MVC"
},
{
    id : 4,
    name: "Juliet Kim",
    job: "Full Stack Developer",
    img:"./exp3.jpeg",
    text:"Collaborate with system engineers, data scientists, frontend developers and software developers to implement solutions that are aligned with and extend shared platforms and solutions.Provide thought leadership to the team around new approaches, workflows and technologies"
}]
// select items from HTML
const author = document.querySelector('#author')
const info = document.querySelector('#info')
const  job= document.querySelector('#job')
const img = document.querySelector('#person-img')

// select buttons
const prevBtn = document.querySelector('.prev-btn')
const nextBtn = document.querySelector('.next-btn')
const randomBtn = document.querySelector('.random-btn')

// set initial value
let currentItem = 0 // global variable

//load initial item
window.addEventListener('DOMContentLoaded',() =>{
  showPerson() // callback the function when the buttons clicked 
})

// show person based on item
//function showPerson(person){
    //const item = reviews[person]    (or) below method

 function showPerson() {      // or can use parameters and pass it to the item
 const item = reviews[currentItem] // faster way to assign to variable
  img.src = item.img    // (or) img.src = reviews[currentItem].img
  author.textContent = item.name   // author.textcontent = reviews[currentItem].name
  job.textContent = item.job
  info.textContent = item.text
    
 }

// add functionality to buttons

//Next button
nextBtn.addEventListener('click', function () {
        currentItem++
    if (currentItem > reviews.length-1)
    currentItem = 0
    showPerson(currentItem)
    })


//Prev Button
prevBtn.addEventListener('click',() =>{
    currentItem--
    if (currentItem < 0)
    currentItem = reviews.length - 1
    
    showPerson(currentItem)
})

// Random button function - show random person
randomBtn.addEventListener('click',() => {
currentItem = Math.floor(Math.random ()* reviews.length)
console.log(currentItem)
showPerson()
})

