import products from "./data/mensProducts.js";
import { checkCard } from "./components/checkCard.js";
import { checkLength } from "./components/checkLength.js";
import { checkEmail } from "./components/checkMail.js";


const cartContainer = document.querySelector(".flex__wrapper-checkout-cart");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

function renderProduct() {
  cartContainer.innerHTML = "";


    const product = products.find((product) => product.id === Number(id));

    if (product) {
      cartContainer.innerHTML += `
        <div class="flex__wrapper-checkout-cart">
        <a href="./product.html?id=${product.id}" style="display: block" class="button__back">
        <p><i class="fa-solid fa-chevron-left"></i>Back</p>
      </a>
      <div class="flex__item-checkout-product">
          <img src="${product.image}" alt="${product.name}" />
          <p>${product.name}</p>
          <p>${product.price}</p>
          </div>
          
        </div>`;
    } else {
      cartContainer.innerHTML += `
                                  <p style="font-size: 24px; color: #ff1e1e">Your cart is empty.</p>
                                  `;
    } 
};

renderProduct();



