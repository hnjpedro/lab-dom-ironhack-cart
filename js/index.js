// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input');

  const subtotal = product.querySelector('.subtotal span');
  subtotal.innerHTML = price * quantity.value;
  
  return subtotal.innerHTML;
  //... your code goes here
}

function calculateAll() {
  // code in te following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  /* const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct); */
  const allProducts = document.getElementsByClassName('product');
  let allSubtotals = 0;
  for (let i = 0; i < allProducts.length; i++) {
    updateSubtotal(allProducts[i]);
    allSubtotals += Number(updateSubtotal(allProducts[i])); 
  }
    let allTotal = document.querySelector('#total-value span');
  allTotal.innerHTML = allSubtotals;
  console.log(allTotal)
  
  
}
// end of test

// ITERATION 2
//... your code goes here

// ITERATION 3
//... your code goes here

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
