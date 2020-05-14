var length, lowerCase, upperCase, numeric, symbol, charArray, charset, password;
var lengthTarget, lowerTarget, upperTarget, numTarget, symTarget, passTarget;

// define target variables to keep code clean
lengthTarget = document.getElementById('lengthIn');
lowerTarget = document.getElementById('lower');
upperTarget = document.getElementById('upper');
numTarget = document.getElementById('num');
symTarget = document.getElementById('sym');
passTarget = document.getElementById('pass');

// array with 4 different char types
charArray = ['abcdefghijklmnopqrstuvwxyz', 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', '0123456789', '!@#$%^&*(){}?'];

// function to randomly pull from compiled charset string and add to password until meeting length
function randomPass() {
  for (var i = 0, n = charset.length; i < length; ++i) {
		password += charset.charAt(Math.floor(Math.random() * n));
	}
};

function charSet() {
  // conditional statements adding corresponding character type from array to charset variable string
	if (lowerCase) {
		charset += charArray[0];
		//c hange lowercase checkbox input to match confirm input
		lowerTarget.checked = true;
	}

	if (upperCase) {
		charset += charArray[1];
		// change uppercase checkbox input to match confirm input
		upperTarget.checked = true;
	}

	if (numeric) {
		charset += charArray[2];
		// change number checkbox input to match confirm input
		numTarget.checked = true;
	}

	if (symbol) {
		charset += charArray[3];
		// change symbol checkbox input to match confirm input
		symTarget.checked = true;
	}
	// if no character types selected, return numeric password and alert
	if (charset === '') {
		charset += charArray[2];
		numTarget.checked = true;
		alert('Requires one character type. Numbers were selected by default.');
	}
}

// function for execution on button click
document.getElementById('generate').onclick = function generate() {
	length = prompt('How many characters?', 'Enter a number between 8 & 128');

	// require number input, alert user and continue prompt until number is entered
	
	if (length == null) {
		length = 8;
		return;
	} else if (isNaN(length) || length < 8 || length > 128) {
		do {
			alert('Must be a number between 8 & 128!');
			length = parseInt(prompt('How many characters?', 'Enter a number between 8 & 128'));
		} while (isNaN(length) || length < 8 || length > 128);
	} else {
		parseInt(length);
	}


	// if cancel is hit, set PW length to 8 as default
	if (length == null) {
		length = 8;
		alert('Default length is 8 characters.');
	}

	// set min/max length to 8-128
	length = Math.min(128, Math.max(8, length));
	lowerCase = confirm('Include lowercase characters?');
	upperCase = confirm('Include uppercase characters?');
	numeric = confirm('Include numeric characters?');
	symbol = confirm('Include special characters?');

	// reset password to blank string
	password = '';
	charset = '';

	// change length form input to match prompt input
	lengthTarget.value = length;

  // add corresponding character type from array to charset variable string
	charSet();

	// randomly pull from compiled charset string and add to password until meeting length
  randomPass ();
  
	// print new password
	passTarget.innerHTML = password;
};

document.getElementById('regenerate').onclick = function regenerate() {
  
  length = lengthTarget.value;
  // set display value in input to required range if user input is outside of range
  if (length < 8 || length > 128){
    // set min/max length to 8-128
    length = Math.min(128, Math.max(8, length));
    lengthTarget.value = length;
  }
	
	lowerCase = lowerTarget.checked;
	upperCase = upperTarget.checked;
	numeric = numTarget.checked;
	symbol = symTarget.checked;

	// reset password to blank string
	password = '';
	charset = '';

  // add corresponding character type from array to charset variable string
	charSet();

  // randomly pull from compiled charset string and add to password until meeting length
  randomPass ();
  
	// print new password
	passTarget.innerHTML = password;
};
