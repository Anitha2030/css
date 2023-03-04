//Resources
//https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage


const itemKey = document.getElementById('itemKey')
const itemValue = document.getElementById('itemValue')
const addBtn = document.getElementById('addBtn')
const deleteBtn = document.getElementById('deleteBtn')
const searchInput = document.getElementById('searchInput')
const searchBtn = document.getElementById('searchBtn')


addBtn.addEventListener('click',() => {
    const savedKey = itemKey.value
    const savedValue = itemValue.value

    if(savedKey && savedValue){
        //Access local storage
        localStorage.setItem(savedKey, savedValue)
    }
})

for (let i=o; i<localStorage.length;i++)
{
    const key = localStorage.key(i)
    const value = localStorage.getItem(key)
    
}

//Task: 
//1: Output the all of key / value pairs from local storage to the document / browser.
// localStorage.addEventListener('a')
// for (let i = 0; i < localStorage.length; i++) {
//         const key = localStorage.key(i)
//         const value = localStorage.getItem(key)
//         let lsData = document.createElement('p')
//         lsData.setAttribute('id', `${key}`)
//         lsData.innerText = `${key} : ${value}`
//         document.body.append(lsData)
//     }

//2: Add a button that clears the local storage, deleting all key / value pairs. 

deleteBtn.addEventListener('click',() => {
localStorage.clear()
location.reload()
})

//3: Add a search function that returns a specific key / value pair from local storage.
// searchBtn.addEventListener('click', (e) => {
//     e.preventDefault()
//     const key = searchInput.value
//     const searchResult = localStorage.getItem(key)
//     const searchOutput = document.createElement('p')
//     searchOutput.innerText = `Search Results: ${key} : ${searchResult}`
//     document.body.append(searchOutput)
// })