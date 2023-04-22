const apiBase = "https://rainydays.jomolteberg.no";
const woocommerceBase = "/wp-json/wc/store";
const productBase = "/products";
const maleTagFilter = '?tag=29';
const featuredBase = '?featured=true';

const fullMaleProductURL = apiBase + woocommerceBase + productBase + maleTagFilter;

export async function getProducts() {
    const response = await fetch(fullMaleProductURL);
    const products = await response.json();
    return products;
};

function createProductHTML(product) {
    const productsContainer = document.querySelector(".productsContainer");

    const productContainer = document.createElement("div");
    productContainer.classList.add("product-card");
    productContainer.id = product.id;

    const productLink = document.createElement("a");
    productLink.href = `product.html?id=${product.id}`;
    productContainer.append(productLink);

    for (let i = 0; i < product.images.length; i++) {
        const imgData = product.images[i];
        const img = document.createElement("img");
        img.src = imgData.src;
        img.alt = imgData.alt;
        productLink.append(img);
    }

    const title = document.createElement("h4");
    title.innerText = product.name;
    productLink.append(title);

    const price = document.createElement("p");
    price.innerText = product.prices.currency_symbol + " " + product.prices.price;
    productLink.append(price);

    productsContainer.append(productContainer);
};


function createProductsHTML(products) {
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        createProductHTML(product);
    }
};

async function getFeaturedProducts() {
    const url = apiBase + woocommerceBase + productBase + featuredBase + '&' + maleTagFilter.replace('?', '');
    try {
        const response = await fetch(url);
        const data = await response.json();
        if (data && data.length > 0) {
            createFeaturedProductHTML(data[0]);
        } else {
            console.error("No featured products found.");
        }
    } catch (error) {
        console.error("Error fetching featured product:", error);
    }
}

function createFeaturedProductHTML(product) {
    const featuredProductContainer = document.querySelector(".featuredContainer");
    featuredProductContainer.id = product.id;
    featuredProductContainer.innerHTML = ''; 

    const featuredHeader = document.createElement("h2");
    featuredHeader.innerText = "Featured product";
    featuredHeader.classList.add("featuredHeader");
    featuredHeader.id = "men";
    featuredProductContainer.append(featuredHeader);

    const productLink = document.createElement("a");
    productLink.href = `product.html?id=${product.id}`;
    featuredProductContainer.append(productLink);

    for (let i = 0; i < product.images.length; i++) {
        const imgData = product.images[i];
        const img = document.createElement("img");
        img.src = imgData.src;
        img.alt = imgData.alt;
        productLink.append(img);
    }

    const title = document.createElement("h4");
    title.innerText = product.name;
    productLink.append(title);

    const price = document.createElement("p");
    price.innerText = product.prices.currency_symbol + " " + product.prices.price;
    productLink.append(price);
}



export async function productsPage(sortedProducts = null) {
    const productsContainer = document.querySelector(".productsContainer");
    productsContainer.innerHTML = ''; 

    const products = await getProducts();

    if (sortedProducts) {
        createProductsHTML(sortedProducts);
    } else {
        createProductsHTML(products);
    };

    getFeaturedProducts();
};

productsPage();
