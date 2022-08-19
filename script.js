var generateBtn = document.querySelector("#generate");

// This is the start of the project. Generating button to have a window.confirm appear. 
generateBtn.addEventListener("click", TheStart);

function TheStart() {

var password = [];

// The first window indicates how many characters the user would like to include in their password. This code also adds units to our password index.
  var userlength = Number(window.prompt ("Please choose how many characters you would like your password to be. Please choose a number between 8 to 128"));
  if (Number.isNaN(userlength)){
    alert ("Please enter a valid number.");
    return;
  } else if (8 > userlength || userlength > 128) {
    alert ("Please choose a number including 8 and up to 128 characters long.");
    return;
  }

//I added a variable here to hold the random cridentials the user decides to include in their password.
var functions = [];

// user decided lowercase
var userlowercase = window.confirm ("Would you like you password to include lowecase letters?");
function lower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
} 

if (userlowercase) {
  functions.push(lower);
}
if (userlowercase){
  alert ("You have decided to use lowercase letters in your password");
} else if (!userlowercase) {
  alert ("You have decided not to use lowercase letters in your password");
}

// This second option is propting the user about uppercase letters
 var useruppercase = window.confirm ("Would you like you password to include uppercase letters?");
 function upper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
 }
 if (useruppercase) {
  functions.push (upper);
 }
if (useruppercase) {
  alert ("You have decided to use uppercase letters in your password");
} else if (!useruppercase) {
  alert ("You have decided not to use uppercase letters in your password");
}

//This third option is for numbers
 var usernumber = window.confirm ("Would you like to include numbers in your password?");
 function numbers() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
 }
 if (usernumber) {
  functions.push (numbers);
 }
 if (usernumber) {
  alert ("You have decided to include numbers in your password");
 } else if (!usernumber) {
  alert ("You have decided not to include numbers in your password");
 }

// This next section is for special characters
 var userspecial = window.confirm ("Would you like to include special characters in your password?");
 function special() {
  return String.fromCharCode(Math.floor(Math.random() * 15)+ 33);
 } 
 if (userspecial){
  functions.push (special);
 }
 if (userspecial) {
  alert ("You have decided to include special characters in your password");
 } else if (!userspecial) {
  alert ("You have decided not to include special characters in your password");
 }
//This addresses how the units in password are going to pull from functions
 for (let i = 0; i < userlength; i++) {
  var randomIndex = Math.floor(Math.random() * functions.length);
  password.push (functions[randomIndex]());  
 }
//  This is going to make sure at least one of the credentails is in every generated password
 for (let i = 0; i < functions.length; i++) {
    password[i] = functions[i]()
 }
 //User must select ok to generate their password.
password = password.join('');
 var userselect = window.confirm ("Click 'ok' to generate your password.");
 if (userselect) {
  alert ("Your new password is: " + password);
 } 
}
// I need to make an alert for when none of the options are selected
// I need to make sure the answer appears in the text box
if (functions = "") {
  alert ("You must select an option to generate a password.");
 }