'use strict';

// Pull all the DOM elements that we need
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// Add an event listener on to form for when we submit
form.addEventListener('submit', function (event) {
  // Method called prevent default which prevents it from actually submitting, width this it doesn't flash , it doesn't actually submit the form
  event.preventDefault();

  // Get the value from username
  console.log(username.value);
});
