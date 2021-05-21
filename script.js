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
  console.log(inputArr);
}

// Event listeners
form.addEventListener('submit', function (event) {
  // Method called prevent default which prevents it from actually submitting, width this it doesn't flash , it doesn't actually submit the form
  event.preventDefault();

  // Get the value from username
  // console.log(username.value);

  if (username.value === '') {
    // console.log(username);
    showError(username, 'Username is required');
    // console.log(username);
  } else {
    showSuccess(username);
  }

  if (email.value === '') {
    showError(email, 'Email is required');
  } else if (!isValidEmail(email.value)) {
    showError(email, 'Email is not valid');
  } else {
    showSuccess(email);
  }

  if (password.value === '') {
    showError(password, 'Password is required');
  } else {
    showSuccess(password);
  }

  if (password2.value === '') {
    showError(password2, 'Password is required');
  } else {
    showSuccess(password2);
  }

  checkRequired([username, email, password, password2]);
});
