import { productsPage, getProducts } from "../shop.js";

const sidebar = document.getElementById("sidebar");
const toggleBtn = document.getElementById("sidebar-toggle");
const closeBtn = document.getElementById("sidebar-close-button");
const colorSelect = document.querySelector("#color-select");
const priceRange = document.querySelector("#price-range");

let products = [];

(async function () {
  products = await getProducts();
  productsPage(products);
})();

/* Toggle the sidebar */

toggleBtn.addEventListener("click", function () {
  sidebar.classList.toggle("active");
});

closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("active");
});

let sortFn = (a, b) => a.name.localeCompare(b.name);

document
  .getElementById("sort-by-price-low-to-high")
  .addEventListener("click", (e) => {
    e.preventDefault();
    sortFn = (a, b) => parseFloat(a.prices.price) - parseFloat(b.prices.price);
    sortAndFilterProducts();
  });

document
  .getElementById("sort-by-price-high-to-low")
  .addEventListener("click", (e) => {
    e.preventDefault();
    sortFn = (a, b) => parseFloat(b.prices.price) - parseFloat(a.prices.price);
    sortAndFilterProducts();
  });

document
  .getElementById("sort-by-name-a-to-z")
  .addEventListener("click", (e) => {
    e.preventDefault();
    sortFn = (a, b) => a.name.localeCompare(b.name);
    sortAndFilterProducts();
  });

document
  .getElementById("sort-by-name-z-to-a")
  .addEventListener("click", (e) => {
    e.preventDefault();
    sortFn = (a, b) => b.name.localeCompare(a.name);
    sortAndFilterProducts();
  });

const sortAndFilterProducts = async () => {
  const selectedColor = colorSelect.value;
  const selectedPrice = priceRange.value;

  let filteredProducts = await getProducts();

  if (selectedColor !== "") {
    filteredProducts = filteredProducts.filter((product) => {
      return product.tags.some(
        (tag) => tag.name.toLowerCase() === selectedColor.toLowerCase()
      );
    });
  }

  if (selectedPrice !== "") {
    const [minPrice, maxPrice] = selectedPrice.split("-");
    filteredProducts = filteredProducts.filter((product) => {
      return (
        parseInt(product.prices.price) >= parseInt(minPrice) &&
        parseInt(product.prices.price) <= parseInt(maxPrice)
      );
    });
  }

  filteredProducts.sort(sortFn);

  const productsContainer = document.querySelector(".productsContainer");
  productsContainer.innerHTML = "";

  productsPage(filteredProducts);
};

colorSelect.addEventListener("change", sortAndFilterProducts);
priceRange.addEventListener("change", sortAndFilterProducts);
