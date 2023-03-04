
// items array
const menu = [
    {
        id: 1,
        title: "Spicy Daal Curry",
        category: "main",
        price: 8.99,
        img: "./Daalcurry2.jpeg",
        desc: "This healthy, vegan Spicy Red Lentil Dal is a flavorful blend of red lentils, tomatoes, ginger and other Indian spices made in one pot."
    },
    {
        id: 2,
        title: "Icecreams",
        category: "desserts",
        price: 3.99,
        img: "./icecreams.jpeg",
        desc: "Ice cream is a frozen dairy dessert obtained by freezing the ice cream mix with continuous agitation. "
    },
    {
        id: 3,
        title: "Mutton Curry",
        category: "main",
        price: 10.99,
        img: "./Muttoncurry1.jpeg",
        desc: "Mutton Curry is a one pot dish where mutton is marinated and cooked with plenty of spices, herbs, onions, tomatoes and yogurt."
    },
    {
        id: 4,
        title: " Crispy Veg Manchurian",
        category: "starters",
        price: 5.99,
        img: "./vegmanchurian2.jpeg",
        desc: "it is basically prepared with a choice of vegetables like, mushroom, baby corn, broccoli and cauliflower which is deep fried with plain flour and corn flour batter. "
    },
    {
        id: 5,
        title: "Milkshakes",
        category: "desserts",
        price: 4.99,
        img: "./desserts-milkshake.jpeg",
        desc: "A cold drink made of milk, a sweet flavouring such as fruit or chocolate, and typically ice cream, whisked until it is frothy"
    },
    {
        id: 6,
        title: "Chicken Chukka",
        category: "starters",
        price: 6.99,
        img: "./ChickenChukka.jpeg",
        desc: "The flavour of this Chicken Chukka is a real stand out. Curry leaves are a thing of pure wonder, and they’re the key to making this recipe something very special."
    },
    {
        id: 7,
        title: "Chicken Curry",
        category: "main",
        price: 9.99,
        img: "./chickencurry.jpeg",
        desc: "Chicken stewed in an onion- and tomato-based, ginger, garlic, tomato puree, chilli and a variety of spices, turmeric, cumin, coriander, cinnamon, and cardamom."
    },
    {
        id: 8,
        title: "Chinese Starters",
        category: "starters",
        price: 8.99,
        img: "./chinesestarters.jpeg",
        desc: "If you're looking for a classic Chinese starter dish, we've got a great selection of starter dishes from China that are destined to start off any dinner party in style."
    }
]
//select parent menu div 
const sectionCenter = document.querySelector('.section-center')
// select buttons
const btnContainer = document.querySelector('.btn-container')

// when the page loads, i will access callback the function.
//dynamically access
//DOMContentLoaded - when page loaded i want something to happen.

// window.addEventListener('DOMContentLoaded',() => {

 // Map Method - we could access each and every item in the product
// Map - we can modify an array
// let displayMenu = menu.map((item) => {
// // console.log(item)

// // return `helllooooo`   --  eg of Modified the array using map method
//  //return `<h1>${item.title}</h1>` -- can access the title from the menu

//  //Dynamic - use the variable
// return `<article class="menu-item">
// <img src = ${item.img}
//   class="photo"
//   alt= ${item.title}
// />
// <div class="item-info">
//   <header>
//     <h4>${item.title}</h1>
//     <h4 class="price">£${item.price}</h4>
//   </header>
//   <p class="item-text">
//     ${item.desc}
//   </p>
// </div>
// </article>`



// empty quotation to avoid the commas between article
// displayMenu = displayMenu.join('')
// // console.log(displayMenu)
// sectionCenter.innerHTML = displayMenu
// })

    
// ------------------------------------------------------------

window.addEventListener('DOMContentLoaded',() => {
    displayMenuItems(menu)
    displayMenuButtons()
})

//Map method - customise the array
// For filtering , need to create a function. otherwise use above code
function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map (function (item) {
        // console.log(item);

    return `<article class="menu-item">
<img src = ${item.img}
  class="photo"
  alt= ${item.title}
/>
<div class="item-info">
  <header>
    <h4>${item.title}</h1>
    <h4 class="price">£${item.price}</h4>
  </header>
  <p class="item-text">
    ${item.desc}
  </p>
</div>
</article>`

})

// join them in one string.

displayMenu = displayMenu.join('')
// console.log(displayMenu)
sectionCenter.innerHTML = displayMenu
}
 const filterBtns = btnContainer.querySelectorAll(".filter-btn")
    console.log(filterBtns)

//filter items thru buttons
    filterBtns.forEach((btn)=>{
    btn.addEventListener('click',(e) =>{
    // console.log(e.currentTarget.dataset.id)
    // assigning the buttons related to the buttons
    const category = e.currentTarget.dataset.id
    //create new array
    const menuCategory = menu.filter(function (menuItem) {
    //    console.log(menuItem.category)
    if(menuItem.category === category){
       return menuItem
    }
    })

    // console.log(menuCategory)
    if (category === 'all'){
    displayMenuItems(menu)}
    else{
    displayMenuItems(menuCategory)
}
})
})

