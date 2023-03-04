//Funtions - reusable block of code

// explore fns and look at how they work
// incorporate fns into our code
// recognise the diff types of fn syntax


//Declaring a funtion - Arrow fn syntax

const greeting = () => {
    console.log("hello")
}
// Calling / Invoking a fn
greeting() //if u call it many times it executes the code many times
greeting()

// Light Switch fn eg

let lightsOn = false //true-checking boolean value

const lightSwitch = () => {
    if (lightsOn){ // lightsOn == true - evaluate boolean value is true
        lightsOn = false
        console.log("Lights Off")
    } else {
        lightsOn = true
        console.log("Lights on")
    }
}
lightSwitch()
lightSwitch()
lightSwitch()
lightSwitch()
lightSwitch()

//Functions with parameters  / arguments
//Parameters - req value

const atm = (accountNumber, Amount) => {
    console.log(
        `Account Number : ${accountNumber}
        Amount :${Amount}`)
}
atm()
//arguments- data we pass to the fn when calling
atm(1212344, 1000)

// Global and Local Scope

const name = "Anitha"  // global value
const age = 35
const city = "Orpington"//global value

const getPersonInfo = () => {
    const name = "Lily"    //Local Value
    const age = 13         //local value

    //console.log(`${name} is ${age} and lives in ${city}`)
   //or
   return `${name} is ${age} and lives in ${city}`
}
console.log(getPersonInfo())

//fns that call other fns

// create 3 separate fns

// numbers that convert to minutes

const secondsToMinutes = (seconds) => {
    return seconds / 60
}
//take minutes to convert to hours
const secondsToHours = (seconds) => {
    return secondsToMinutes (seconds) / 60
}

const secondsToDays = (seconds) => {
    return secondsToHours(seconds) / 24
}

console.log(secondsToDays(86400))

// eg 2 - fns that call other fns

const multiply10 = (num) => {
    return num * 10
}
const multiply100 = (num) => {
    return multiply10(num) * 10
}
console.log(multiply100(1))

// diff forms of syntax
//Arrow fn syntax - Modern Method

const squaredArrow = (number) => {
    return number * number
}
//function Declaration
function squaredDeclaration(number){
    return number * number
}

//Anonymous Fn
const squaredAnon = function (number){
    return number * number
}
//console.log (squaredArrow())

//Tasks
//1: Write a function that takes in a name as a parameter and returns a personalised greeting.
const firstName = (name) => {
    console.log(`Good Luck : ${name} `)
}
firstName("Anitha")


//2: Write a function that takes in a number as a parameter and checks whether the number is odd or even.
const num1 = (number) => {
    if (number % 2 == 0){
        console.log (`${number} is even number `)
} else{
    console.log (`${number} is odd number`)
}
}
num1(9)

//3: Write an ATM function that takes in a pin number and withdrawal amount as parameters. 
//The pin must match a stored pin value and the withdrawal amount must be lower than the account balance value. 
//If the pin is correct and the withdrawal amount is less than the balance, approve the transaction. 
//If the pin is incorrect or funds are insufficient, decline the transaction.
let pinNumber1= 1234
let accountBalance= 1000
const atm1 = (pinNumber, withdrawAmount) => {
    if (pinNumber == pinNumber1 && accountBalance >= withdrawAmount)
    {
        console.log ("pinnumber accepted! Transaction Approved")

    }else if (pinNumber1 != pinNumber){
        console.log("Wrong Pin number. Transaction Declined!")
    }
    else if( pinNumber1 !== pinNumber && accountBalance >= withdrawAmount){
        console.log("wrong pin number")
   }
   else{
    console.log("transaction denied. insufficient fund")
   }
    }
atm1(1234, 9990)

// fn - enter the favourite food

const favfood = (response) => {
    console.log(`my fav food is ${response}`);
}
favfood("Pizza")
favfood("Briyani")
favfood("cake")


//
const favfood1 = (response = "empty,please add ur fav food") => {
    console.log( `my fav food is ${response}`)
}
favfood1()

//

const favfood3 = (response) => {
    if (response == undefined){
        console.log("Please enter your fav food ");
    }else{
        console.log(" your fav food " + response);
    }
}
favfood3("pizza")
    
  // 
const myName = (name) => {
console.log (`my name is ${name}`)
}
myName("Anitha")
myName("Anitha")
myName("Anitha")

// other way

const myName1 = () => {
    console.log(`my name is joe`);
    }
    myName1()
    myName1()
    myName1()

    //
    const colours = () => {
    console.log("red, Blue, Green, yellow, White");
    }
   colours()
   let mycolours = colours
   mycolours()

 
