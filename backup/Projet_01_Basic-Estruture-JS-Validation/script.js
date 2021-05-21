'use strict';

// Pull all the DOM elements that we need
const form = window.document.getElementById('form');
const username = window.document.getElementById('username');
const email = window.document.getElementById('email');
const password = window.document.getElementById('password');
const password2 = window.document.getElementById('password2');

// Show input error message
function showError(input, message) {
  console.log(input, message);
}

// Show success outline
function showSuccess(input) {
  console.log(input);
}

// Check email is valid

// Event listeners
form.addEventListener('submit', function (event) {
  event.preventDefault();

  if (username.value === '') {
    showError(username, 'Error ups');
  } else {
    showSuccess(username);
  }
});
