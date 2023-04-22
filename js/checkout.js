import { getProducts } from "./shop.js";

import { checkCard } from "./components/checkCard.js";
import { checkLength } from "./components/checkLength.js";
import { checkEmail } from "./components/checkMail.js";

const cartContainer = document.querySelector(".flex__wrapper-checkout-cart");
const queryString = document.location.search;

const params = new URLSearchParams(queryString);
const id = params.get("id");

async function renderProduct() {
  cartContainer.innerHTML = "";

  const products = await getProducts();
  const product = products.find((product) => product.id === Number(id));

  if (product) {
    const flexWrapper = document.createElement('div');
    flexWrapper.className = 'flex__wrapper-checkout-cart';
    cartContainer.append(flexWrapper);

    const backLink = document.createElement('a');
    backLink.href = `./product.html?id=${product.id}`;
    backLink.style.display = 'block';
    backLink.className = 'button__back';
    flexWrapper.append(backLink);

    // const backText = document.createElement('p');
    // const backIcon = document.createElement('i');
    // backIcon.className = 'fa-solid fa-chevron-left';
    // backText.append(backIcon);
    // backText.append(document.createTextNode('Back'));
    // backLink.append(backText);

    const productArea = document.createElement('div');
    productArea.className = 'flex__item-checkout-product';
    flexWrapper.append(productArea);
  
    const productImg = document.createElement('img');
    productImg.src = product.images[0].src; 
    productImg.alt = product.name;
    productArea.append(productImg);
  
    const productName = document.createElement('p');
    productName.textContent = product.name;
    productArea.append(productName);
  
    const productPrice = document.createElement('p');
    productPrice.textContent = product.prices.currency_symbol + " " + product.prices.price; 
    productArea.append(productPrice);

  } else {
    const emptyCartText = document.createElement('p');
    emptyCartText.style.fontSize = '24px';
    emptyCartText.style.color = '#ff1e1e';
    emptyCartText.textContent = 'Your cart is empty.';
    cartContainer.append(emptyCartText);
  }
}

renderProduct();


// Form validation

const form = document.querySelector(".form");

const firstName = document.querySelector("#firstName");
const firstNameError = document.querySelector("#firstNameError");
const lastName = document.querySelector("#lastName");
const lastNameError = document.querySelector("#lastNameError");

const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");

const streetAdress = document.querySelector("#streetAdress");
const streetAdressError = document.querySelector("#streetAdressError");

const postalCode = document.querySelector("#postalCode");
const postalCodeError = document.querySelector("#postalCodeError");

const city = document.querySelector("#city");
const cityError = document.querySelector("#cityError");

const creditCard = document.querySelector("#creditCard");
const creditCardError = document.querySelector("#creditCardError");

const nameOnCard = document.querySelector("#nameOnCard");
const nameOnCardError = document.querySelector("#nameOnCardError");

const cardNumber = document.querySelector("#cardNumber");
const cardNumberError = document.querySelector("#cardNumberError");

const expirationDate = document.querySelector("#expirationDate");
const expirationDateError = document.querySelector("#expirationDateError");

const securityCode = document.querySelector("#securityCode");
const securityCodeError = document.querySelector("#securityCodeError");



const successMessage = document.querySelector(".successMessage");

const validateForm = () => {
  event.preventDefault();

  if (checkLength(firstName.value, 0) === true) {
    firstNameError.style.display = "none";
  } else {
    firstNameError.style.display = "block";
  }

  if (checkLength(lastName.value, 0) === true) {
    lastNameError.style.display = "none";
  } else {
    lastNameError.style.display = "block";
  }

  if (checkEmail(email.value) === true) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }

  if (checkLength(streetAdress.value, 0) === true) {
    streetAdressError.style.display = "none";
  } else {
    streetAdressError.style.display = "block";
  }

  if (checkLength(postalCode.value, 0) === true) {
    postalCodeError.style.display = "none";
  } else {
    postalCodeError.style.display = "block";
  }

  if (checkLength(city.value, 0) === true) {
    cityError.style.display = "none";
  } else {
    cityError.style.display = "block";
  }

  if (checkLength(nameOnCard.value, 0) === true) {
    nameOnCardError.style.display = "none";
  } else {
    nameOnCardError.style.display = "block";
  }

  if (checkCard(cardNumber.value) === true) {
    cardNumberError.style.display = "none";
  } else {
    cardNumberError.style.display = "block";
  }

  if (checkLength(expirationDate.value, 0) === true) {
    expirationDateError.style.display = "none";
  } else {
    expirationDateError.style.display = "block";
  }

  if (checkLength(securityCode.value, 0) === true) {
    securityCodeError.style.display = "none";
  } else {
    securityCodeError.style.display = "block";
  }

  if (
    checkLength(firstName.value, 0) &&
    checkLength(lastName.value, 0) &&
    checkEmail(email.value) === true &&
    checkLength(streetAdress.value, 0) &&
    checkLength(postalCode.value, 0) &&
    checkLength(city.value, 0) &&
    checkLength(nameOnCard.value, 0) &&
    checkCard(cardNumber.value) === true &&
    checkLength(expirationDate.value, 0) &&
    checkLength(securityCode.value, 0)
  ) {
    successMessage.style.display = "block";
  } else {
    successMessage.style.display = "none";
  }
};

form.addEventListener("submit", validateForm);


const submitBtn = document.querySelector("#submitBtn");

submitBtn.addEventListener("click", (event) => {
  event.preventDefault(); 
  validateForm(); 
});