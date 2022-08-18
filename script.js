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
// This next section deals with the amount of characters that appear in the password
 var userlength = Number(window.prompt ("Please choose how many characters you would like your password to be. Please choose a number between 8 to 16"));
  if (userlength < 8, userlength > 16) {
    alert ("The amount of characters in your password must be between 8 and 16 characters");
  } else if (7 < userlength < 17){
    alert ("You have choosen a password containing " + userlength + " characters.");
  }




  // This is the code this is supposed to create the password
  var createpass = window.confirm ("Click 'ok' to generate your password.");
  if (createpass) {
    for (var i = 0; i < PASS.length; i++){
      alert ("Your new password is: " + PASS[i]);
    }
  }
  
// I decided to start with variables.
var Length = [1234567891234567];
var lowercase = [qwertyuioplkjhgfdsazxcvbnm];
var uppercase = [QWERTYUIOPLKJHGFDSAZXCVBNM];
var numbers = [0123456789];
var specialcharacters = ["!","@","#","$","%","^","&","*","(",")"];
  

//This next section will be used to fill in the password credentials
var PASS = ["1", "2", "3", "4", "5", "6", "7"]
  if (userlength == 8) {
    PASS.push (8);
  } else if (userlength == 9){
    PASS.push (8);
    PASS.push (9);
  } else if (userlength == 10) {
    PASS.push (8);
    PASS.push (9);
    PASS.push (10);
  } else if (userlength == 11) {
    PASS.push (8);
    PASS.push (9);
    PASS.push (10);
    PASS.push (11);
  } else if (userlength == 12) {
    PASS.push (8);
    PASS.push (9);
    PASS.push (10);
    PASS.push (11);
    PASS.push (12);
  } else if (userlength == 13) {
    PASS.push (8);
    PASS.push (9);
    PASS.push (10);
    PASS.push (11);
    PASS.push (12);
    PASS.push (13);
  } else if (userlength == 14) {
    PASS.push (8);
    PASS.push (9);
    PASS.push (10);
    PASS.push (11);
    PASS.push (12);
    PASS.push (13);
    PASS.push (14);
  } else if (userlength == 15) {
    PASS.push (8);
    PASS.push (9);
    PASS.push (10);
    PASS.push (11);
    PASS.push (12);
    PASS.push (13);
    PASS.push (14);
    PASS.push (15);
  } else if (userlength == 16) {
    PASS.push (8);
    PASS.push (9);
    PASS.push (10);
    PASS.push (11);
    PASS.push (12);
    PASS.push (13);
    PASS.push (14);
    PASS.push (15);
    PASS.push (16);
  } else if (userlength < 8, userlength > 16) {
    PASS = ["Between 8 and 16 characters please"]
  }
  //Creating rulles for the code based on the users answer
  if (userlowercase) {
    PASS[1] = lowercase[i];
  } else if (!userlowercase) {
    PASS[index] != lowercase[i];
  }
  if (useruppercase) {
    PASS[0] = uppercase[i];
  } else if (!uppercase) {
    PASS[index] != uppercase[i];
  }
  if (usernumber) {
    PASS[6,7] = numbers[i];
  } else if (!usernumber) {
    PASS[index] != numbers[i];
  }
  if (userspecial) {
    PASS[8,9] = specialcharacters[i];
  } else if (!userspecial) {
    PASS[index] != specialcharacters[i];
  }


}
