// Arrays & Loops:

// Learning Objectives

// - To understand what an array is
//- To explore how arrays can be used
//- to make use of array methods
//- to ex[plore loops and integrate them into your code


// Arrays - Container with a list of data
let coffeeorder = [
    "James = Cappacino",
    "Hannah = Frappacino",
    "Alex = Latte"
]
console.log(coffeeorder)

// JS starts from 0 - index
console.log(coffeeorder[2])

// Change data in the array
coffeeorder [1] = "Hannah - Americano"
console.log(coffeeorder)

//Array Property
console.log(coffeeorder.length)

//Array Methods
coffeeorder.push("Anitha - Water") //it adds string to array
console.log(coffeeorder)

//other method
coffeeorder.pop() // remove the latest addition in the array
console.log(coffeeorder)

// Array Methods Resource
// https://www.programiz.com/javascript/library/array



//Loops

let colours = [
    "red",
    "blue",
    "Green",
    "Purple",
    "Yellow",
    "Black",
    "pink",
    "White"
]
console.log(colours)

console.log (colours[0])
console.log (colours[1])
console.log (colours[2])
console.log (colours[3])
console.log (colours[4])

// Placed after - reads the value adds 1
//places before - adds 1 then the value is read
let a = 1
let b = a++  // or ++a

console.log(a)
console.log(b)

// check
let a1 = 1
let b1= ++a // or ++a
console.log(a1)
console.log(b1)

// For Loop
for (let i = 0; i < colours.length; i++){
console.log(colours[i])
}

//Resource
//https://www.w3schools.com/jsref/jsref_foreach.asp     (Resource)

// cycle thru 1 to 20
//Multiples of 2 for loop
let multiplesTwo = []

for (i = 1; i <= 21; i++){
    if (i % 2 == 0){
        multiplesTwo.push(i)
    }
}
console.log(multiplesTwo)

//While loop 
// will run continuously until specified condition is met
// *** make sure condition can / will be met or loop will run infinitely

let number = 1

while (number <= 10){
    console.log(number)
    number++
}

// While Loop Example2 - Basic Card Game

let cards = ["Diamond", "Club", "Heart", "Spade"]

let currentCard = "Club"

while(currentCard != "Spade"){
    console.log(currentCard)
    currentCard = cards[Math.floor(Math.random() *4)]
}

console.log(currentCard)

// Do while Loop 
// Evaluates the condition after the code has ran
// Will always run atleast once even if condition is not met
let x = 5
let y = 0
do{
x = x + y
console.log(x)
y++
}
while (y < 10)


//TASKS:

//1 - Create an array of your favourite Films / TV shows, up to 5 items. Using an array method add 2 more items to your array. Use a loop to cycle through the array and log each item to the console.

let fav = ["Teacher", "The Watcher", "Mummy Returns", "Harry Potter", "Home Alone"]
console.log(fav)

fav.push("Nativity", "home")
console.log(fav)

for (let i = 0; i < fav.length; i++){
    console.log(fav[i])
    }


//2 - Use a loop to generate 10 random numbers between 1-100 and log them to the console.
//Inside of your app.js I want you to select your heading from the document using a DOM query method. Store the element in a variable and add class attribute to the element as well as update styling and the text content of your title. 
let num = []

while (num.length < 10){
    let numb = Math.round(Math.random() * 100)
    if (num.indexOf(numb) == -1){
        num.push(numb)
    }
}
console.log(num);

//different ways
for ( i = 0; i < 10; i++){
    let randomNum= Math.floor (Math.random () * 100)+ 1
    console.log(randomNum)
}

//3 - Write a loop that counts backwards from 20-0, logging each number to the console.

let num1 = []
for (let i = 20; i >= 0; i--){
    num1.push(i)
}
console.log(num1)


//Different ways

for ( i = 20; i >= 0; i--){
console.log(i)
}

//4 - Write a loop to generate 5 random numbers between 1-50. For each number generated, check if the number is divisible by 5 or not. Log whether it is divisible or not to the console.

let num2 = []

while (num2.length < 5){
    let numb = Math.round(Math.random() * 50)
    if (num2.indexOf(numb) ){
        num2.push(numb)
    }
    if  (numb % 5 == 0 )
    {
        console.log (numb +  "this number is divisible by 5")
    }
    else {
        console.log (numb +  "this number is not divisible by 5")
    }
}
console.log(num2);

//different ways

for (let i = 0; i < 5; i++){
let randomNumber2 = Math.floor (Math.random() * 50) + 1
if (randomNumber2 % 5 ===0){
    console.log(`${randomNumber2}is divisible by 5')
} else
{
    console.log(`${randomNumber2} is not divisible by 5')
}
}
//Additional Activity: If you manage to finish the tasks, spend some time experimenting with array methods to gain an understanding of how they can be put to use in our code.











