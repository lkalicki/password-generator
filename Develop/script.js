//THEN I am presented with a series of prompts for password criteria
//WHEN prompted for password criteria
//THEN I select which criteria to include in the password
//WHEN prompted for the length of the password
//THEN I choose a length of at least 8 characters and no more than 128 characters
//WHEN asked for character types to include in the password
//THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
//WHEN I answer each prompt
//THEN my input should be validated and at least one character type should be selected
//WHEN all prompts are answered
//THEN a password is generated that matches the selected criteria
//WHEN the password is generated
//THEN the password is either displayed in an alert or written to the page

function generatePassword() {
  console.log("testing connection");
  
//prompt for character length (8-128)
var validateLength = parseInt(prompt("How many characters would you like your password to be? Please select a number between 8 and 128."))    

// loop if not a number, null/blank, or not in range
while (!validateLength || validateLength < 8 || validateLength > 128 ) {
  alert ("You did not enter a number in the required range. Please enter a number between 8 and 128.");
  generatePassword();
}
//if in range, confirm character selection
if (validateLength >= 8 && validateLength <= 128){}
do {
  alert ("Please include at least one character type.");
  confirmUpper = confirm("Would you like to include uppercase letters?");
  confirmLower = confirm("Would you like to include lowercase letters?");
  confirmNumbers = confirm("Would you like to include numbers?");
  confirmSpecial = confirm("Would you like to include special characters?");
} while (!confirmUpper && !confirmLower && !confirmNumbers && !confirmSpecial);




//validate input 

  return "generated password";
}

const RandomGeneration = {
  lower: RandomLower,
  upper: RandomUpper,
  number: RandomNumber,
  symbol: RandomSpecial
}

//functions to retrieve random chars
function RandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function RandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function RandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function RandomSpecial() {
  return String.fromCharCode(Math.floor(Math.random() * 15) + 33);
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

