import { getProducts } from "./shop.js";

const productContainer = document.querySelector(".flex__wrapper-product-page");
const exploreContainer = document.querySelector(".exploreContainer");
const apiBase = "https://rainydays.jomolteberg.no";
const woocommerceBase = "/wp-json/wc/store";
const productBase = "/products";
const maleTagFilter = "?tag=29";
const featuredBase = "?featured=true";

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

async function renderProduct() {
  productContainer.innerHTML = "";

  const products = await getProducts();

  const product = products.find((product) => product.id === Number(id));

  if (product) {
    const productPage = document.createElement("div");
    productPage.classList.add("flex__wrapper-product-page");

    const title = document.createElement("h1");
    title.innerText = product.name;
    productPage.append(title);

    const img = document.createElement("img");
    img.src = product.images[0].src;
    productPage.append(img);

    const sizeHeader = document.createElement("h2");
    sizeHeader.innerText = "Select size:";
    productPage.append(sizeHeader);

    const selectSize = document.createElement("div");
    selectSize.classList.add("select-size");
    productPage.append(selectSize);

    const sizes = ["XS", "S", "M", "L", "XL"];
    sizes.forEach((size) => {
      const sizeElement = document.createElement("p");
      sizeElement.classList.add("cta-size");
      sizeElement.innerText = size;
      selectSize.append(sizeElement);
    });

    const infoHeader = document.createElement("h2");
    infoHeader.innerText = "Product information";
    productPage.append(infoHeader);

    const info = document.createElement("p");
    info.innerHTML = product.description;
    productPage.append(info);

    const addToCart = document.createElement("a");
    addToCart.href = `./checkout.html?id=${product.id}`;
    addToCart.classList.add("cta");
    addToCart.innerText = "Add to cart";
    productPage.append(addToCart);

    productContainer.append(productPage);
  }
  await renderFeaturedExploreProducts();
}

async function renderFeaturedExploreProducts() {
  const url =
    apiBase +
    woocommerceBase +
    productBase +
    featuredBase +
    "&" +
    maleTagFilter.replace("?", "");

  try {
    const response = await fetch(url);
    const featuredProducts = await response.json();

    exploreContainer.innerHTML = "";

    const exploreHeader = document.createElement("h2");
    exploreHeader.innerText = "Explore:";
    exploreHeader.style.display = "block";
    exploreContainer.append(exploreHeader);

    const imageContainer = document.createElement("div");
    imageContainer.classList.add("imageContainer");
    exploreContainer.append(imageContainer);

    for (const product of featuredProducts) {
      const productLink = document.createElement("a");
      productLink.href = `./product.html?id=${product.id}`;
      imageContainer.append(productLink);

      const img = document.createElement("img");
      img.src = product.images[0].src;
      img.alt = product.images[0].alt;
      productLink.append(img);
    }
  } catch (error) {
    console.error("Error fetching featured products:", error);
  }
}

renderProduct();
