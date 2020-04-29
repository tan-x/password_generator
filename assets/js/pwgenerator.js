var length, lowerCase, upperCase, numeric, symbol, charArray, charset, password;

//function for execution on button click
document.getElementById('generate').onclick = function generate() {
	length = prompt('How many characters?', '8 min; 128 max');
	if (length == null) {
		length = 8;
	}
	//convert length prompt to number
    len = parseInt(length);
    // set min/max length to 8-128
    len = Math.min(128, Math.max(8, len));
	lowerCase = confirm('Include lowercase characters?');
	upperCase = confirm('Include uppercase characters?');
	numeric = confirm('Include numeric characters?');
	symbol = confirm('Include special characters?');
	//array with 4 different char types
	charArray = ['abcdefghijklmnopqrstuvwxyz', 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', '0123456789', '!@#$%^&*()?'];
	// reset password to blank string
    password = '';
    charset = '';

	//conditional statements adding corresponding character type from array to charset variable string
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
    //if no character types selected, return numeric password and alert
    if (charset === '') {
        charset += charArray[2];
        alert("Requires one character type. Numbers were selected by default.");
    }

	for (var i = 0, n = charset.length; i < len; ++i) {
		password += charset.charAt(Math.floor(Math.random() * n));
    }
	//print new password
    document.getElementById('pass').innerHTML = password;
};
