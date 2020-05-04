var length, lowerCase, upperCase, numeric, symbol, charArray, charset, password;

// array with 4 different char types
charArray = [
  "abcdefghijklmnopqrstuvwxyz",
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  "0123456789",
  "!@#$%^&*()?",
];

// function for execution on button click
document.getElementById("generate").onclick = function generate() {
  length = parseInt(prompt("How many characters?", "Enter a number between 8 & 128"));

  // require number input, alert user and continue prompt until number is entered
  do {
    alert("Must be a number!");
    length = parseInt(prompt("How many characters?", "Enter a number between 8 & 128"));
  } while (isNaN(length));
  
  // if cancel is hit, set PW length to 8 as default
  if (length == null) {
    length = 8;
    alert("Default length is 8 characters.");
  }

  // set min/max length to 8-128
  length = Math.min(128, Math.max(8, length));
  lowerCase = confirm("Include lowercase characters?");
  upperCase = confirm("Include uppercase characters?");
  numeric = confirm("Include numeric characters?");
  symbol = confirm("Include special characters?");

  // reset password to blank string
  password = "";
  charset = "";

  // change length form input to match prompt input
  document.getElementById("lengthIn").value = length;

  // conditional statements adding corresponding character type from array to charset variable string
  if (lowerCase) {
    charset += charArray[0];
    //c hange lowercase checkbox input to match confirm input
    document.getElementById("lower").checked = true;
  }

  if (upperCase) {
    charset += charArray[1];
    // change uppercase checkbox input to match confirm input
    document.getElementById("upper").checked = true;
  }

  if (numeric) {
    charset += charArray[2];
    // change number checkbox input to match confirm input
    document.getElementById("num").checked = true;
  }

  if (symbol) {
    charset += charArray[3];
    // change symbol checkbox input to match confirm input
    document.getElementById("sym").checked = true;
  }
  // if no character types selected, return numeric password and alert
  if (charset === "") {
    charset += charArray[2];
    document.getElementById("num").checked = true;
    alert("Requires one character type. Numbers were selected by default.");
  }
  
  // randomly pull from compiled charset string and add to password until meeting length
  for (var i = 0, n = charset.length; i < length; ++i) {
    password += charset.charAt(Math.floor(Math.random() * n));
  }
  // print new password
  document.getElementById("pass").innerHTML = password;
};

document.getElementById("regenerate").onclick = function regenerate() {
  length = document.getElementById("lengthIn").value;
  // set min/max length to 8-128
  length = Math.min(128, Math.max(8, length));
  lowerCase = document.getElementById("lower").checked;
  upperCase = document.getElementById("upper").checked;
  numeric = document.getElementById("num").checked;
  symbol = document.getElementById("sym").checked;

  // reset password to blank string
  password = "";
  charset = "";

  // conditional statements adding corresponding character type from array to charset variable string
  if (lowerCase) {
    charset += charArray[0];
  }

  if (upperCase) {
    charset += charArray[1];
  }

  if (numeric) {
    charset += charArray[2];
  }

  if (symbol) {
    charset += charArray[3];
  }
  // if no character types selected, return numeric password and alert
  if (charset === "") {
    charset += charArray[2];
    alert("Requires one character type. Numbers were selected by default.");
  }

  for (var i = 0, n = charset.length; i < length; ++i) {
    password += charset.charAt(Math.floor(Math.random() * n));
  }
  // print new password
  document.getElementById("pass").innerHTML = password;
};
