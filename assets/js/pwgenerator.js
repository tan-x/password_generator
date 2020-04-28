var length, lowerCase, upperCase, numeric, symbol, charArray, charset, password;

length = prompt('How many characters?', '8');
//confvert length prompt to number
len = parseInt(length);
lowerCase = confirm('Include lowercase characters?');
upperCase = confirm('Include uppercase characters?');
numeric = confirm('Include numeric characters?');
symbol = confirm('Include special characters?');
//array with 4 different char types
charArray = ['abcdefghijklmnopqrstuvwxyz', 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', '0123456789', '!@#$%^&*()?><'];
password = "";

//conditional statements adding corresponding character type from array to charset variable string
if (lowerCase) {
    charset = charArray[0];
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
// for loop adds random selection from charset string based on the length number
for (var i = 0, n = charset.length; i < len; ++i) {
        password += charset.charAt(Math.floor(Math.random() * n));
    }

document.getElementById("pass").innerHTML = password;

//function for execution on button click
document.getElementById("generate").onclick = function generate() {
    // reset password to blank string
    password = '';
    for (var i = 0, n = charset.length; i < len; ++i) {
        password += charset.charAt(Math.floor(Math.random() * n));
    }
    //print new password
    document.getElementById("pass").innerHTML = password;
}