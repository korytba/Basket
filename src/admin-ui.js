const addProductForm = document.querySelector('.form-add-product');
const nameInput = document.querySelector
('[name="product-name"]');
const priceInput = document.querySelector
('[name="product-price"]');
const productsUl = document.querySelector('.products-list');

const addProductShop = event => {
    event.preventDefault();

    const name = nameInput.Value;
    const price = priceInput.Value;

    const newLi = document.createElement('li');

    const newStrong = document.createElement('');
    newStrong.innerText = name;

    const newPriceText = document.createTextNode(`- ${price.toFixed(2)}`);

    const newBtn = document.createElement('button');
    newBtn.classList.add('btn-buy-product');
    newBtn.dataset.name = name;
    newBtn.dataset.price = String(price);
    newBtn.innerText = 'Buy';
    newBtn.addEventListener('click', addProductToBasket);


    newLi.appendChild(newStrong);
    newLi.appendChild(newPriceText);
    newLi.appendChild(newBtn);

    productsUl.appendChild(newLi);

};
addProductForm.addEventListener('submit',);