// Assignment Code
//This is a variable labeling the reg generate password button on screen
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", lowercaseprompt);


// I decided to start with variables.
var Length = [1234567891234567];
var lowercase = [qwertyuioplkjhgfdsazxcvbnm];
var uppercase = [QWERTYUIOPLKJHGFDSAZXCVBNM];
var numbers = [0123456789];
var specialcharacters = ["!","@","#","$","%","^","&","*","(",")",];

// Created a function allowing the passowor crediential questions to run.
// The first is prompting the user to choose options of using or not useing lowercase letters
function lowercaseprompt() {
  var userlowercase = window.confirm ("Would you like you password to include lowecase letters?");
  if (userlowercase){
  alert ("You have decided to use lowercase letters in your password");
} else if (!userlowercase) {
  alert ("You have decided not to use lowercase letters in your password");
}
// This second option is propting the user about uppercase letters
 var useruppercase = window.confirm ("Would you like you password to include uppercase letters?");
if (useruppercase) {
  alert ("You have decided to use uppercase letters in your password");
} else if (!useruppercase) {
  alert ("You have decided not to use uppercase letters in your password");
}
//This third option is for numbers
 var usernumber = window.confirm ("Would you like to include numbers in your password?");
 if (usernumber) {
  alert ("You have decided to include numbers in your password");
 } else if (!usernumber) {
  alert ("You have decided not to include numbers in your password");
 }
// This next section is for special characters
 var userspecial = window.confirm ("Would you like to include special characters in your password?");
 if (userspecial) {
  alert ("You have decided to include special characters in your password");
 } else if (!userspecial) {
  alert ("You have decided not to include special characters in your password");
 }


}


// Everything below is extra


generateBtn.addEventListener("click", lengthprompt);

function lengthprompt() {
  var userlength = Number(window.prompt ("Please choose how many characters you would like your password to be. Please choose a number between 8 to 16"));
  alert ("You have choosen a password including " + userlength + " characters.");
}

//pg72 slice for password length
