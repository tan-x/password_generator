var length, lowerCase, upperCase, numeric, symbol, charArray, charset, password;

length = prompt('How many characters?', '0');
//confvert length prompt to number
len = parseInt(length);
lowerCase = confirm('Include lowercase characters?');
upperCase = confirm('Include uppercase characters?');
numeric = confirm('Include numeric characters?');
symbol = confirm('Include special characters?');
//array with 4 different char types
charArray = ['abcdefghijklmnopqrstuvwxyz', 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', '0123456789', '!@#$%^&*()?><'];

//conditional statements adding corresponding character type from array to charset variable string
if (lowerCase) {
    charset = charArray[0];
}

if (upperCase) {
    charset = charset + charArray[1];
}

if (numeric) {
    charset = charset + charArray[2];
}

if (symbol) {
    charset = charset + charArray[3];
}