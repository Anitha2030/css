
//https://api.adviceslip.com/
//Advice Slip JSON API


//https://github.com/public-apis/public-apis
// GitHub - public-apis/public-apis: A collective list of free APIs
// A collective list of free APIs. Contribute to public-apis/public-apis development by creating an account on GitHub.

// algorithms 
//https://www.youtube.com/watch?v=RcvQagxK_9w




// store the ouput div in  a constant
const div1 = document.querySelector('.div1')
console.log(div1)

//Asynchronous function to fetch the external data
async function getData(){
//await the response from the API
const response = await fetch("https://hp-api.onrender.com/api/characters")
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
    console.log(apiData)

    for (let {name, image} of apiData){
        const cardContainer = document.createElement('div')
        cardContainer.classList.add('cardContainer')
        const imageContainer = document.createElement('div')
        imageContainer.classList.add('imageContainer')
        const characterName = document.createElement('h2')
        characterName.innerText = `${name}`
        cardContainer.append(characterName)
        cardContainer.append(imageContainer)
        const characterImage = document.createElement('img')
        characterImage.setAttribute('src',image)
        imageContainer.append(characterImage)
        div1.append(cardContainer)
 }

})