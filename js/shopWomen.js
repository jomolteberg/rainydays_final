import { womensProducts } from "./data/womensProducts.js";

const productContainer = document.querySelector(".grid__wrapper-products");
const sortOptions = document.querySelectorAll(".sort-options a");
const colorSelect = document.querySelector("#color-select");
const priceRange = document.querySelector("#price-range");


export let womenProductsToRender = womensProducts;

// Event listener for each sort option
sortOptions.forEach(option => {
  option.addEventListener("click", () => {
    const sortOption = option.id;
    womenProductsToRender.sort((a, b) => {
      if (sortOption === "sort-by-price-low-to-high") {
        return parseInt(a.price.slice(1)) - parseInt(b.price.slice(1));
      } else if (sortOption === "sort-by-price-high-to-low") {
        return parseInt(b.price.slice(1)) - parseInt(a.price.slice(1));
      } else if (sortOption === "sort-by-name-a-to-z") {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });
    renderWomanProducts();
  });
});

// Event listener for color select
colorSelect.addEventListener("change", () => {
  const selectedColor = colorSelect.value;
  if (selectedColor === "") {
    womenProductsToRender = womensProducts;
  } else {
    womenProductsToRender = womensProducts.filter(womensProducts => {
      if (Array.isArray(womensProducts.color)) {
        return womensProducts.color.includes(selectedColor);
      } else {
        return womensProducts.color === selectedColor;
      }
    });
  }
  renderWomanProducts();
});

// Event listener for price range select
priceRange.addEventListener("change", () => {
  const selectedPrice = priceRange.value;
  if (selectedPrice === "") {
    womenProductsToRender = womensProducts;
  } else {
    womenProductsToRender = womensProducts.filter(womensProducts => {
      const [minPrice, maxPrice] = selectedPrice.split("-");
      return parseInt(womensProducts.price.slice(1)) >= parseInt(minPrice.slice(1)) &&
        parseInt(womensProducts.price.slice(1)) <= parseInt(maxPrice.slice(1));
    });
  }
  renderWomanProducts();
});


export function renderWomanProducts() {
  productContainer.innerHTML = "";

  womenProductsToRender.forEach(function (womensProducts) {
    productContainer.innerHTML += `
      <div class="product-card">
        <a href="../productWomen.html?id=${womensProducts.id}">
          <img class="flex__item-product-img" src="${womensProducts.image}">
          <div class="flex__item-product-info">
            <h4>${womensProducts.name}</h4>
            <p class="flex__item-product-price">${womensProducts.price}</p>
          </div>
        </a>
      </div>
    `;
  });
}


renderWomanProducts();
