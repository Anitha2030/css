//https://www.w3schools.com/tags/att_script_defer.asp#:~:text=The%20defer%20attribute%20is%20a,the%20src%20attribute%20is%20present).

//Objects - collection of data.Use objects to organise the code

console.log("test")
// console - object 
// log - Method

//properties = data contained within an object
//Methods = Functions within the objects.Things that the object can do

//objects work with what is known as key value pairs

// 'KEY' : "value"

//Object Example

const coffeeshop = {
    name : "Costa",
    //name is the key & costa is the value
    branchNumber: 250,
    specialOffers: true,
    drinksMenu:[
        "Americano",
        "Latte",
        "Tea"
    ]
}
console.log(coffeeshop);

//We can access object data to methods/properties
console.log(coffeeshop.name)

// We can also use bracket notation
console.log(coffeeshop["branchNumber"])

// We commonly will see a combination of the two methods
console.log(coffeeshop.drinksMenu[0]);

// Adding new key/value pairs to an object that already exists
coffeeshop.deserts = ["chocolate Mouse", "ice Cream"]
console.log(coffeeshop);

//Updating property values
coffeeshop["branchNumber"] = 100
console.log(coffeeshop);

// Adding offers to the coffeshop object
coffeeshop.breakfastOffer = "Free Bagel with any coffee"
coffeeshop.lunchOffer = "Free coffee with any sandwich"

console.log(coffeeshop)

let time = 1000
let offer = "No offer"

if (time < 1100) {
    offer = coffeeshop.breakfastOffer
    console.log(offer)
} else if (time < 1500){
    offer = coffeeshop.lunchOffer
    console.log(offer)
}

// Adding methods to our object (functions within objects)

coffeeshop.open = () => {
    return "open,Welcome"
}
coffeeshop.close = () => {
    return "Sorry, We're closed"
}
console.log(coffeeshop.open())
console.log(coffeeshop.close())

// create an alarm clock object
//msg for weekday
//msg for weekend

const alarm = {
    weekendAlarm: "Sleep in it's weekend!",
    weekdayAlarm: "Get up at 7:00am",
    checkAlarm(day){
        if (day === "Saturday" || day === "Sunday"){
            return this.weekendAlarm
            // this - look inside object
        }else{
            return this.weekdayAlarm
        }
    }
}
console.log(alarm.checkAlarm("Sunday"))


//https://www.programiz.com/javascript
//Learn JavaScript Programming
//JavaScript is a powerful and flexible programming language. It can execute on a web browser that allows us to make interactive webpages such as popup menus, animations, form validation etc. JavaScr...

//www.Codewars.com

//1: Create an object called ‘person’ with keys of name age and city. 
//Add a method to the person object that greets the person using their name.

 const person = {
    name: "Anitha",
    age: 35,
    city: "Orpington",
    greeting()
    {
        return `Hello ${this.name}`
    }}
    console.log( person.greeting())
    
//2: Without amending the original object I would like you to add an array of your favourite films to the person object. 
//I would like you to then add a method to your object that returns a sentence stating the persons ‘name’, ‘age’ , ‘city’ and one of their favourite films.

person.favFilms = ["The Watcher", "Harry Potter", "Silence", "Home Alone", "Life of PI" ]
person.sentence = () => {
    return `${person.name}  ${person.age} years old. Lives in ${person.city}.And favourite film is ${person.favFilms[2]}`
}
console.log(person.sentence())

//3:  Create a pet object with the following properties: ‘name’, ‘typeOfAnimal’, ‘age’ and ‘colour’. 
//Incorporate a ‘drink’ method and an ‘eat’ method that returns a sentence about the animal eating or drinking.

const pet = {
    name: "Dog",
    typeOfAnimal: "Domestic",
    age: 3,
    colour: "Beige",
    
eating ()  {
    return `${this.name} is a ${this.typeOfAnimal} animal age is ${this.age} years old and he is ${this.colour} colour and he is eating well`
},
drinking () {
    return `${this.name} is a ${this.typeOfAnimal} animal age is ${this.age} years old and he is ${this.colour} colour and he is eating well`
}
}
   console.log(pet.eating())
console.log(pet.drinking())

// DOM --Check for next week
//https://www.youtube.com/watch?v=KShnPYN-voI

//
for (let i = 0; i<=100; i++){
    if (i % 2 == 0){
        console.log ( i)
    }
}