import { womensProducts } from "./data/womensProducts.js";

const productContainer = document.querySelector(".flex__wrapper-product-page");
const exploreContainer = document.querySelector(".exploreContainer");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");


function renderWomanProduct() {
    productContainer.innerHTML = "";
  
    const womensProduct = womensProducts.find(womensProduct => womensProduct.id === Number(id));
  
    if (womensProduct) {
      productContainer.innerHTML += `
        <div class="flex__wrapper-product-page">
          <h1>${womensProduct.name}</h1>
          <img src="${womensProduct.image}">
         
          <h2>Select size:</h2>
          <div class="select-size">
            <p class="cta-size">XS</p>
            <p class="cta-size">S</p>
            <p class="cta-size">M</p>
            <p class="cta-size">L</p>
            <p class="cta-size">XL</p>
          </div>
  
          <h2>Product information</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
            ullamcorper egestas ullamcorper a erat diam fermentum, in auctor. Nibh
            ut nunc, eget in. Arcu etiam porttitor duis dignissim. Viverra lectus
            donec gravida lacus ante vel elit diam.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
            ullamcorper egestas ullamcorper a erat diam fermentum, in auctor. Nibh
            ut nunc, eget in. Arcu etiam porttitor duis dignissim. Viverra lectus
            donec gravida lacus ante vel elit diam.
          </p>
  
          <a href="./checkoutWomen.html?id=${womensProduct.id}" class="cta-women">Add to cart</a>
        </div>

     `;

     exploreContainer.innerHTML += `
     <div class="exploreContainer">
     <h2 style="display: block; align-self: start">Explore:</h2>
     <div class="imageContainer">
       <a href="./productWomen.html?id=100">
         <img src="./images/jacket-woman-black-1.jpg" alt="Woman in black jacket" />
       </a>
       <a href="./productWomen.html?id=102">
         <img src="./images/jacket-woman-blue-2.jpg" alt="Women in blue jacket" />
       </a>
       <a href="./productWomen.html?id=104">
         <img src="./images/jacket-woman-blue-1.jpg" alt="Women in blue jacket" />
       </a>
       <a href="./productWomen.html?id=106">
         <img src="./images/jacket-women-black-2.jpg" alt="Woman in black jacket" />
       </a>
     </div>
   </div>
   
   `;

    } else {
      productContainer.innerHTML = "Product not found";
    }
  }

  renderWomanProduct();
  
 