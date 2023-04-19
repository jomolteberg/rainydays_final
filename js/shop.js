import products from "./data/mensProducts.js";

const productContainer = document.querySelector(".grid__wrapper-products");
const sortOptions = document.querySelectorAll(".sort-options a");
const colorSelect = document.querySelector("#color-select");
const priceRange = document.querySelector("#price-range");


export let productsToRender = products;

// Event listener for each sort option
sortOptions.forEach(option => {
  option.addEventListener("click", () => {
    const sortOption = option.id;
    productsToRender.sort((a, b) => {
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
    renderProducts();
  });
});

// Event listener for color select
colorSelect.addEventListener("change", () => {
  const selectedColor = colorSelect.value;
  if (selectedColor === "") {
    productsToRender = products;
  } else {
    productsToRender = products.filter(product => {
      if (Array.isArray(product.color)) {
        return product.color.includes(selectedColor);
      } else {
        return product.color === selectedColor;
      }
    });
  }
  renderProducts();
});

// Event listener for price range select
priceRange.addEventListener("change", () => {
  const selectedPrice = priceRange.value;
  if (selectedPrice === "") {
    productsToRender = products;
  } else {
    productsToRender = products.filter(product => {
      const [minPrice, maxPrice] = selectedPrice.split("-");
      return parseInt(product.price.slice(1)) >= parseInt(minPrice.slice(1)) &&
        parseInt(product.price.slice(1)) <= parseInt(maxPrice.slice(1));
    });
  }
  renderProducts();
});


export function renderProducts() {
  productContainer.innerHTML = "";

  productsToRender.forEach(function (product) {
    productContainer.innerHTML += `
      <div class="product-card">
        <a href="../product.html?id=${product.id}">
          <img class="flex__item-product-img" src="${product.image}">
          <div class="flex__item-product-info">
            <h4>${product.name}</h4>
            <p class="flex__item-product-price">${product.price}</p>
          </div>
        </a>
      </div>
    `;
  });
}


renderProducts();
