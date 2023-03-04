//Task: 
//Create a new folder and add an index.html, style.css and app.js to it. 
//Add your HTML boilerplate and correctly link the three files. Add a h1 element to your HTML. 
//  *** Add some CSS rules to your stylesheet inside a class or id selector, to be applied to a new element later.

// ***Add the corresponding class or id attribute to the element in order for it to match the CSS rules already written in your CSS file. 



//Using JavaScript I would like you to query the DOM, selecting the h1 element and storing it in a variable. 

const title = document.querySelector ('h1')

// added an ID to the h1 element
title.setAttribute ('id', 'title')
//title.classList.add('title')

//I would also like you to update the text content of your h1 element to say something new.
title.innerText = "Hello Everyone"

//Using the DOM I want you to add a ul to your page, then create and add three li’s to your ul. 

//create an ul element

const newUl = document.createElement('ul')

// create individual listitems
const listItems1 = document.createElement('li')
const listItems2 = document.createElement('li')
const listItems3 = document.createElement('li')

// add all listitems to ul
newUl.append(listItems1, listItems2, listItems3)

// gave listitems a class
listItems1.classList.add('listItems')
listItems2.classList.add('listItems')
listItems3.classList.add('listItems')

//innertext value to the listItems
listItems1.innerText = "Item 1 "
listItems2.innerText = "Item 2 "
listItems3.innerText = "Item 3 "

// added ul with listitems to the body
document.body.append(newUl)

//stored listitems in the nodelist
const listItems = document.querySelectorAll('.listItems')

console.log (listItems)

//Then using a loop add some styling all of your list items. 
for ( let i = 0; i < listItems.length; i++){
listItems[i].style.color = "orange"
}

//Finally I want you to use JavaScript to remove your page title element.
//title.remove()


