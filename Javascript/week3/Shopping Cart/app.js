const btnCart = document.querySelector('#cart-icon')
const cart = document.querySelector('.cart')
const btnClose = document.querySelector('#cart-close')

//displaying added items to the cart

btnCart.addEventListener('click',() => {
    cart.classList.add('cart-active')
})
// when clicking close button, the cart has to be closed
btnClose.addEventListener('click',() => {
    cart.classList.remove('cart-active')
})

//after document completely loaded the action has to happen

document.addEventListener('DOMContentLoaded',loadFlower)
// if we are calling one funtion too many times, better to keep oit inside the function
function loadFlower() {
 loadContent()
 }
function loadContent() {
    //1.remove items from cart
    let btnRemove = document.querySelectorAll('.cart-remove')
    btnRemove.forEach((btn) => {
       btn.addEventListener('click',removeItem)
    })
    // 2.product item quantity change- quantity
    let qtyElements = document.querySelectorAll('.cart-quantity')
    qtyElements.forEach((input) => {
        input.addEventListener('change', changeQty)
    })
    //3.adding each item to cart from class
    // clicking cart symbol from each item has to be added in the cart
    let addCart = document.querySelectorAll('.add-cart')
    addCart.forEach((btn) => {
        btn.addEventListener('click', addItemsCart)
    })
    updateTotal()
}

//1. Remove Item from cart
function removeItem() { 
    if(confirm('Are you sure to remove')){
    // removinf item from cart and array
    let flowerTitle = this.parentElement.querySelector('.cart-flower-title').innerHTML
    itemList=itemList.filter(el=>el.flowerTitle!=flowerTitle)
        // itemList = itemList.filter(el=>flowerTitle!=flowerTitle)
        this.parentElement.remove()
         loadContent()
       }}
       

// 2.Change quantity from cart - make default quatity value 1. 
// make sure input box only accepts numbers and not allowed to go below 0 value.
function changeQty(){
    if(isNaN(this.value) || this.value < 1){
      this.value=1;
    }
    loadContent()
}

//4.create new array for not repeat products
let itemList = []

//3. when we click the cart symbol from each items, items has to be added in the cart
// Simply adding items to the cart
function addItemsCart() {
    // console.log('hi') -- checking that fn is working
    // Accessing each elements from each item
    let eachFlower = this.parentElement
    let flowerImg= eachFlower.querySelector('.flower-img').src
    let flowerTitle= eachFlower.querySelector('.flower-title').innerHTML
    let flowerPrice= eachFlower.querySelector('.flower-price').innerHTML
    // console.log(flowerImg,flowerTitle,flowerPrice) 

    //creating new variable to validate the cartitems not repeated
    let newProduct = {flowerImg,flowerTitle,flowerPrice}
    // to check the product already exist in the cart
    //el-element(any name)
    if (itemList.find((el) => el.flowerTitle == newProduct.flowerTitle))
    {
        alert("Product already exists in cart") 
        return
    }else{
        itemList.push(newProduct)
    }
    // to display in the cart, we have to store this fn into variable
    let newProductElement = createCartProduct(flowerImg,flowerTitle,flowerPrice)
    // we have to diaplay the actual content like img,title,price not the code, for that we have to craete this element
    let element = document.createElement('div')
    element.innerHTML = newProductElement
    let cartBasket = document.querySelector('.cart-content')
    cartBasket.append(element)
    // this code is dynamically created,if we are not calling this fn loadContent, the remove icon and negative numbers will appear
    loadContent()
    
}
// creating fn for add item to display in the cart dynamically(when ckcicking each item trolley it has to be added in the cart)
function createCartProduct(flowerImg,flowerTitle,flowerPrice){


    return` <div class="cart-box">
    <img src="${flowerImg}" class="cart-img" />
    <div class="detail-box">
      <div class="cart-flower-title">${flowerTitle}</div>
      <div class="price-box">
        <div class="cart-price">${flowerPrice}</div>
        <div class="cart-amt">${flowerPrice}</div>
      </div>

      <input type="number" value="1" class="cart-quantity" />
    </div>
    <ion-icon name="trash" class="cart-remove"></ion-icon>
  </div>`
}
function updateTotal()
{
  const cartItems=document.querySelectorAll('.cart-box');
  const totalValue=document.querySelector('.total-price');

  let total=0;

  cartItems.forEach(product=>{
    let priceElement=product.querySelector('.cart-price');
    let price=parseFloat(priceElement.innerHTML.replace("£",""));
    let qty=product.querySelector('.cart-quantity').value;
    total+=(price*qty);
    product.querySelector('.cart-amt').innerText="£"+(price*qty);

  });

  totalValue.innerHTML='£'+total;


  // Add Product Count in Cart Icon

  const cartCount=document.querySelector('.cart-count');
  let count=itemList.length;
  cartCount.innerHTML=count;

  if(count==0){
    cartCount.style.display='none';
  }else{
    cartCount.style.display='block';
  }


}
