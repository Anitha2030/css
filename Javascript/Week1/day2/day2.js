//conditions in Javascript

//If / Else syntax

//if(condition){
////run this code}
//else if(second condition){
//console.log("before")
//}
//else{
   // console.log("before")
//}


// Weather Example
let weather="rain"

//conditional Logic
//checking if the weather variable is equal to(==)"sunny"
if (weather == "sunny"){
    console.log("Bring sunglasses")
}
   else if(weather == "rain"){
        console.log("Bring an Umberlla")
}
    else if(weather == "snow"){
        console.log("Not sure.Take a jacket")
}
    else{
        console.log("Not sure")
}

//Comparison Operators

// == Equal to
// === Equal to
//eg
let x=100
let y="100"
// checks whether value is same
console.log(x == y)  //true
// checks value and data type are same
console.log(x === y) //False

// != Not Equal to

//!== Not Equal value or Euqal Data type

// > Greater than
// < Less tHan
// >= Greater than or Equal to
// <== Less Than or Equal to

//Logical Operators

// || or

// && and

// ! Not

// Traffic Light Example - Logical or(||)

let trafficlight="amber"

if (trafficlight === "red" || trafficlight === "amber"){
    console.log("stop")
}
else{
    console.log("Go")
}
// Different Ways
if (trafficlight != "green"){
    console.log("Stop")
}
else {
    console.log("Go")
}

//Numbers Example - Check if a number is between 5 and 10

let num1 = 8

if (num1 >= 5 && num1 <= 10){ 
    console.log(`${num1} is between 5 and 10`)
} else {
    console.log(`${num1} is not between 5 and 10`)
}

//Switch Statement
let day = "Friday"

switch (day){
    case "Monday":
        console.log("Weekend is over! Happy Monday!")
        break;
    case "Tuesday":
        console.log("Second Day of week!")
        break;
    case "Wednesday":
        console.log("Halfway through the week!")
         break; 
    case "Thrusday":
        console.log("Almost Friday!")
        break;
    case "Friday":
        console.log("Hurray Friday!")
        break;
    default:
        console.log("Its Weekend!")

}

//Switch Statement- Grade Example

let testScore = 65

switch (true){
case testScore >= 70:
    console.log ( "Distinction")
    break;
case testScore >= 60:
    console.log ( "Merit")
    break;
case testScore >= 50:
    console.log ( "Pass")
    break;
default:
    console.log("Fail")
}
// make sure writing conditions are written properly otherwise it gives wrong grade

//1:Write a conditional statement that checks whether a customer is old enough to be served alcohol at a bar. Log a message to the console depending on the age of the customer.
let age = 20
if (age >= 18){ //if (age>17)
    console.log("Alcohol can be served")
} else {
    console.log("Alcohol is not allow to serve")
}

//2: Declare a variable called "Password". Write an if statement that checks how many characters are in the password. If the password has 8 or more characters log the password to the console, if the password has less than 8 characters log to the console that the password is too short.
let Password = "123456"
if (Password.length < 8)
console.log("Password is too short")
else {
   console.log(Password)
}

//3: Create a variable that stores a number. Check whether the number is divisible by 3 or 5, if so log "This number is divisible by 3 or 5" to the console. Otherwise log an alternate message to the console.
let numb1 = 8
 
if (numb1 % 3 == 0|| numb1 % 5 == 0){
        console.log("The number is divided by  both 3 and 5")
}
else  {
        console.log("This number is not divided by 3 or 5 ")
    }

//4: Create a variable that stores a number. Check if the number is divisible by 3, if so log "fizz" to the console. Check if the number is divisible by 5 and if so log "buzz" to the console. If the number is divisible by both 3 and 5, log "fizz buzz" to the console. Otherwise log the number to the console.
let num2 = 15

if (num2 % 3 == 0 && num2 % 5 == 0)
  {
        console.log("Fizz Buzz ")
    }

else if (num2 % 3 == 0){
    console.log("Fizz")
}
else if (num2 % 5 == 0){
    console.log("Buzz")
}
    else{
       console.log("This number is not divided by 3 & 5")
    // or console.log(num2)
    }


//5: Write some code to check whether or not a number is a palindrome (read the same backwards as it is forwards. e.g. 1001 is 1001 backwards).
//task 5 Hint: Look into converting the number to a string and then using string methods...

//1001 12321 121

let number1 = 1001

let numberReversed = number1.toString().split('').reverse().join('')

if (number1.toString() === numberReversed){

console.log (`${number1} is a palindrome`)

}else{
    console.log (`${number1} is not a palindrome`)
}


// Different method

let rem,temp,result=0,number
number=12321
temp=number
while(number>0)
{
    rem=number%10
    number=parseInt(number/10)
    result=result*10+rem
}
if(result==temp)
console.log(result+"is Palindrome")
else
console.log(result+"is not Palindrome")


















