import { checkEmail } from "./components/checkMail.js";
import { checkLength } from "./components/checkLength.js";
import { checkPhone } from "./components/checkPhone.js";

const form = document.querySelector(".form");

const firstName = document.querySelector("#firstName");
const firstNameError = document.querySelector("#firstNameError");
const lastName = document.querySelector("#lastName");
const lastNameError = document.querySelector("#lastNameError");

const message = document.querySelector("#message");
const messageError = document.querySelector("#messageError");

const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");

const phone = document.querySelector("#phone");
const phoneError = document.querySelector("#phoneError");

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

  if (checkLength(message.value, 9) === true) {
    messageError.style.display = "none";
  } else {
    messageError.style.display = "block";
  }

  if (checkEmail(email.value) === true) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }

  if (checkPhone(phone.value) === true) {
    phoneError.style.display = "none";
  } else {
    phoneError.style.display = "block";
  }

  if (checkLength(firstName.value, 0) && checkLength(lastName.value, 0) && checkLength(message.value, 9) && checkPhone(phone.value) === true && checkEmail(email.value) === true) {
    successMessage.style.display = "block";
    console.log("test")

  }  else {
    successMessage.style.display = "none";
  }

};

form.addEventListener("submit", validateForm);