import { womensProducts } from "./data/womensProducts.js";

const cartContainer = document.querySelector(".flex__wrapper-checkout-cart");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

function renderWomanProduct() {
  cartContainer.innerHTML = "";


    const womensProduct = womensProducts.find((womensProduct) => womensProduct.id === Number(id));

    if (womensProduct) {
      cartContainer.innerHTML += `
        <div class="flex__wrapper-checkout-cart">
        <a href="./productWomen.html?id=${womensProduct.id}" style="display: block" class="button__back">
        <p><i class="fa-solid fa-chevron-left"></i>Back</p>
      </a>
      <div class="flex__item-checkout-product">
          <img src="${womensProduct.image}" alt="${womensProduct.name}" />
          <p>${womensProduct.name}</p>
          <p>${womensProduct.price}</p>
          </div>
          
        </div>`;
    } else {
      cartContainer.innerHTML += `
                                  <p style="font-size: 24px; color: #ff1e1e">Your cart is empty.</p>
                                  `;
    } 
};

renderWomanProduct();



