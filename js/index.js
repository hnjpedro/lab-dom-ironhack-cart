// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input');

  const subtotal = product.querySelector('.subtotal span');
  subtotal.innerHTML = price * quantity.value;

  return subtotal.innerHTML;
  //... your code goes here
}

// ITERATIONS 2 AND 3
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
  console.log(allTotal);
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget.parentNode.parentNode;
  console.log('The target in remove is:', target);
  target.parentNode.removeChild(target);
  calculateAll();
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  const nameInput = document.querySelector(
    '.create-product input[type="text"]'
  );
  const nameValue = nameInput.value;
  const priceInput = document.querySelector(
    '.create-product input[type="number"]'
  );
  const priceValue = priceInput.valueAsNumber;
  const newProduct = `<tr class="product">
    <td class="name">
      <span>${nameValue}</span>
    </td>
    <td class="price">$<span>${priceValue}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>
  </tr> `;
  const tbody = document.querySelector('#cart tbody');
  tbody.innerHTML += newProduct;
  const removeBtns = document.getElementsByClassName('btn-remove');
  for (let button of removeBtns) {
    button.addEventListener('click', removeProduct);
  }

  nameInput.value = '';
  priceInput.value = 0;
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  const removeBtn = document.querySelectorAll('.btn-remove');
  for (let button of removeBtn) {
    button.addEventListener('click', removeProduct);
  }
  const createProd = document.getElementById('create');
  createProd.addEventListener('click', createProduct);
});
