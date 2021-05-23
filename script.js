'use strict';

// Pull all the DOM elements that we need
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// Show input error message
function showError(input, message) {
  //   console.log(input);
  const formControl = input.parentElement;
  //   console.log(formControl);
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
}

// Show success outline
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

// Check email is valid
function isValidEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

// Check required fields
function checkRequired(inputArr) {
  // console.log(inputArr);
  inputArr.forEach(function (input) {
    // console.log(input.value);
    // console.log(input.value.trim());
    // console.log(input.id);
    if (input.value.trim() === '') {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}

// Get fieldName
function getFieldName(input) {
  return input.id.charAt(0);
}

// Event listeners
form.addEventListener('submit', function (event) {
  // Method called prevent default which prevents it from actually submitting, width this it doesn't flash , it doesn't actually submit the form
  event.preventDefault();

  // Get the value from username
  // console.log(username.value);

  checkRequired([username, email, password, password2]);
});
