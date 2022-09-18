// ITERATION 1

function updateSubtotal(products, totalDOM) {
  let total = 0;
  products.map((product) => {
    const price = product.querySelector('.price span').innerHTML;
    const quantity = product.querySelector('.quantity input').value;
    const subtotal = price * quantity;
    product.querySelector('.subtotal span').innerHTML = subtotal;
    total += subtotal;
    console.log(total);
    totalDOM.innerHTML = total;
  });
}
// }PORQUE NO DEBO PONER EL CONSOLELOG PORQUE ME PETA?
// console.log(updateSubtotal(product));

function calculateAll() {
  const allProducts = Array.from(document.getElementsByClassName('product'));
  // console.log(`Hola bueubeueubebeenas`, allProducts);
  const total = document.querySelector('#total-value span');
  updateSubtotal(allProducts, total);
}

// ITERATION 4

function removeProduct(event) {
  //Bloqueadisssimo xddddddd nose como hacerlo ahora mismo
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  const remove = window.querySelectorAll('.btn btn-remove');
  for (let i = 0; i < remove.length; i++) {
    remove[i].addEventListener('click', removeProduct);
  }
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
