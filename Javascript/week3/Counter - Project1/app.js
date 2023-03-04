//select values and buttons
const value = document.querySelector('#value')
const btns = document.querySelectorAll('.btn')

// set initial value
let count = 0

// assigning values for each buttons
btns.forEach(function(btn){
btn.addEventListener('click',(e) =>{
const style = e.currentTarget.classList
if (style.contains("increase")){
    count++
    
} else if (style.contains('decrease')){
    count--
    
}else{
    count = 0
}
if (count > 0){
    value.style.color = "green"

}else if (count < 0){
    value.style.color = "red"}
    else{
        value.style.color = "black"
    }
value.textContent = count
})})
