// store the ouput div in  a constant
const div1 = document.querySelector('#div1')
console.log(div1)

//Asynchronous function to fetch the external data
async function getData(){
//await the response from the API
const response = await fetch("https://api.adviceslip.com/advice")
// we wait on the reponse and convert it to JSON upon receiving it

const apiData = response.json()
//Once received we return the API data in order to work with it
return (apiData)
}

// addeventlistener to wait our page loading
document.addEventListener("DOMContentLoaded", async () => {
    // Declare an empty array to store the data
    let apiData = []

    //try catch to catch an error if fetch is unsuccessful
    try{
        //try to fetch the data
        apiData = await getData()
    }catch(error){
// if any error occurs log it to the console
    console.log(error)
    }
    // we now have Api data to work with
    console.log(apiData.slip.advice)
    // create a P tag to store the advice
    const adviceText = document.createElement('p')
    //output the advice to the element
    adviceText.textContent = `"${apiData.slip.advice}"`

    // add a class to the element for styling
    adviceText.classList.add('advice')

    //add the advice element to the div1 
    div1.append(adviceText)
})