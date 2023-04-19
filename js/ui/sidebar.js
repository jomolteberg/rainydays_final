import { renderProducts, productsToRender } from "../shop.js";

const sidebar = document.getElementById('sidebar');
const toggleBtn = document.getElementById('sidebar-toggle');
const closeBtn = document.getElementById('sidebar-close-button');
const sortByPriceLowToHigh = document.getElementById("sort-by-price-low-to-high");
const sortByPriceHighToLow = document.getElementById("sort-by-price-high-to-low");
const sortByNameAToZ = document.getElementById("sort-by-name-a-to-z");
const sortByNameZToA = document.getElementById("sort-by-name-z-to-a");

/* Toggle the sidebar */

toggleBtn.addEventListener('click', function() {
  sidebar.classList.toggle('active');
});

closeBtn.addEventListener('click', function() {
    sidebar.classList.remove('active');
  });

sortByPriceLowToHigh.addEventListener("click", function() {
    // Sort items by price (low to high)
    productsToRender.sort((a, b) => parseFloat(a.price.slice(1)) - parseFloat(b.price.slice(1)));
    renderProducts();
   
  });
  
  sortByPriceHighToLow.addEventListener("click", function() {
    // Sort items by price (high to low)
    productsToRender.sort((a, b) => parseFloat(b.price.slice(1)) - parseFloat(a.price.slice(1)));
    renderProducts();
   
  });
  
  sortByNameAToZ.addEventListener("click", function() {
    // Sort items by name (A to Z)
    productsToRender.sort((a, b) => a.name.localeCompare(b.name));
    renderProducts();
   
  });
  
  sortByNameZToA.addEventListener("click", function() {
    // Sort items by name (Z to A)
    productsToRender.sort((a, b) => b.name.localeCompare(a.name));
    renderProducts();
   
  });



  
