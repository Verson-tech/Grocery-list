// grocery list:
const form = document.querySelector('form');
// listen for the submission:
form.addEventListener('submit',function(event){
// prevent the default behaviour:    
   event.preventDefault();
// grab the input values   
// const inputProduct = document.querySelector('#product')
// const inputQuantity = document.querySelector('#qty')
// OR
const inputProduct = form.elements.product.value
const inputQuantity = form.elements.qty.value
// get ahold of <ul> tag in index.html:
const ulTag = document.querySelector('ul')
// create a new <li>:
const newProduct = document.createElement('li')
// set the text on the <li> to include the product and quantity:
newProduct.innerText = `${inputProduct} ${inputQuantity}`
// append the <li> to the <ul>:
ulTag.append(newProduct)
console.log(newProduct)
})
