import products from "./data/mensProducts.js";

const productContainer = document.querySelector(".flex__wrapper-product-page");
const exploreContainer = document.querySelector(".exploreContainer");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");


function renderProduct() {
    productContainer.innerHTML = "";
  
    const product = products.find(product => product.id === Number(id));
  
    if (product) {
      productContainer.innerHTML += `
        <div class="flex__wrapper-product-page">
          <h1>${product.name}</h1>
          <img src="${product.image}">
         
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
  
          <a href="./checkout.html?id=${product.id}" class="cta">Add to cart</a>
        </div>

     `;

     exploreContainer.innerHTML += `
     <div class="exploreContainer">
     <h2 style="display: block; align-self: start">Explore:</h2>
     <div class="imageContainer">
       <a href="./product.html?id=2">
         <img src="./images/sweater-black-1.jpg" alt="Man in black jacket" />
       </a>
       <a href="./product.html?id=4">
         <img src="./images/jacket-green-1.jpg" alt="Man in green jacket" />
       </a>
       <a href="./product.html?id=6">
         <img src="./images/jacket-black-1.jpg" alt="Man in black jacket" />
       </a>
       <a href="./product.html?id=8">
         <img src="./images/jacket-grey-blue-1.jpg" alt="Man in grey and blue jacket" />
       </a>
     </div>
   </div>
   
   `;

    } else {
      productContainer.innerHTML = "Product not found";
    }
  }

  renderProduct();
  
 