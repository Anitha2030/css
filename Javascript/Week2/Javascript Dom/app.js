//DOM =Document Object Model

//Querying the DOM

//getElementById() - selects the element with the corresponding ID from the DOM
const title = document.getElementById('title')
console.log(title)

//getElementsByClassName() -Selects all elements with the corresponding className from the DOM - get multiple elemts
const listItems = document.getElementsByClassName('listItems')
console.log(listItems)

//getElementsTagName()
//Selects all elements with the corresponding TagName from the DOM - get multiple elemts
const liElements = document.getElementsByTagName('li')
console.log(liElements)

// querySelector()
// we pass in a css selector and query selector grabs the first element that matches from the DOM

const paragraph = document.querySelector('p')
console.log(paragraph)

// querySelectorAll()
// we pass in a css selector and query selector grabs all the element that matches from the DOM
const paragraphs = document.querySelectorAll('p')
console.log(paragraphs)


//Styling an element with JS

title.style.color = "blue"

//paragraphs.style.color = "red"
// apply styling to paragrapohs to apply loops

for( let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.backgroundColor = "red"
}

// Creating an Element and adding it to the DOM
// store UL in an element
const ul = document.querySelector('ul')
console.log(ul)

// Use createElement() to create a new list item
const newListItem = document.createElement('li')
console.log(newListItem)

// Add the li to the ul using append()
ul.append(newListItem)
console.log(ul)

//Modify text of the Element using .innerText

newListItem.innerText = "Item 5 (New Item Added)"

// Modify  / Add an attribute to an element
newListItem.setAttribute('id', 'itemFive')

//remove an attribute from an element
newListItem.removeAttribute('id')

//add a class to an element
newListItem.classList.add('newClass')

//remove an  classListfrom an element
newListItem.classList.remove('newClass')

//removing an element from the DOM
newListItem.remove()

// Using the Template Literals Eg
let newHeading = "New Heading Text"
title.innerText = `This is the ${newHeading}`

// Traversing the DOM
console.log(ul)
console.log(ul.parentElement) // body
console.log(ul.parentNode)

const htmlElement = document.documentElement
console.log(htmlElement)
console.log(htmlElement.parentElement) // it doesn't have one
console.log(htmlElement.parentNode)

// Child node Traversal
console.log(ul.childNodes)
//console.log(ul.childElementCount)
console.log(ul.childNodes[1])
console.log(ul.firstChild)
console.log(ul.lastChild)

// select just the element children
console.log(ul.children)
console.log(ul.firstElementChild)
console.log(ul.lastElementChild)

// Clone an Element
const itemsTwo = ul.children[1]
console.log(itemsTwo)

const itemsTwoClone = itemsTwo.cloneNode(true)

ul.append(itemsTwoClone)

// Check for sibling relationship

console.log(ul.previousSibling)
console.log(ul.nextSibling)

//check the elements only sibling relationship

console.log(ul.previousElementSibling)
console.log(ul.nextElementSibling)







