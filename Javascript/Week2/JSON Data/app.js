// JSON -Javascript object Notation

//https://www.programiz.com/javascript/date-time
// JavaScript Date and Time
// In this tutorial, you will learn about date and time in JavaScript with the help of examples.


//https://www.w3schools.com/jsref/jsref_obj_date.asp
// JavaScript Date Reference
// W3Schools offers free online tutorials, references and exercises in all the major languages of the web. Covering popular subjects like HTML, CSS, JavaScript, Python, SQL, Java, and many, many more.


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
// Conditional (ternary) operator - JavaScript | MDN
// The conditional (ternary) operator is the only JavaScript operator that takes three operands:
//   a condition followed by a question mark (?), then an expression to execute if the condition is truthy...



//transfering data -JSON

//differences:

// Works in key/value pairs - both wrapped in double quotes
// Cannot contain fns (methods)

// let JSONObj = {"firstName": "David", "lastName": "Smith", "age": 27, "Married": true}

// let JSONArray = ["Red", "Blue"]

// let JSON


const time1 = Date.now()
console.log(time1);

const time = new Date;
const date0= time.getDate();
console.log(date0)

const date1 = time.getDay()
console.log(date1)
const date2 = time.getFullYear()
console.log(date2)
const date3 = time.getMonth()
console.log(date3)

const event = new Date;
event.setDate(40)
console.log(event.getDate())

const currentDate = new Date()

const month = currentDate.getMonth()
const date = currentDate.getDate()
const year = currentDate.getFullYear()

let monthDateYear = (month + 1)+ "/" + date + '/' + year

console.log(monthDateYear)



console.log(1)
setTimeout( () =>{
    console.log(2)
},2000)
setTimeout( () =>{
    console.log(3)
},0)

console.log(4)