// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// This first git push it to make sure I have completed the gitbash to link this to my github acount.

// I decided to start with variables.
var Length = [1234567891234567];
var lowercase = [qwertyuioplkjhgfdsazxcvbnm];
var uppercase = [QWERTYUIOPLKJHGFDSAZXCVBNM];
var numbers = [0123456789];
var specialcharacters = ["!","@","#","$","%","^","&","*","(",")",];



