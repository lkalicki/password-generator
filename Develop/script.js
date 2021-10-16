//THEN a password is generated that matches the selected criteria
//WHEN the password is generated
//THEN the password is either displayed in an alert or written to the page

function generatePassword() {
    
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

// selected character types and length
const length = validateLength;
const Lower = confirmLower;
const Upper = confirmUpper;
const Numbers = confirmNumbers;
const Special = confirmSpecial;


//Generate Password
 
const randomGeneration = {
    Lower: RandomLower,
    Upper: RandomUpper,
    Numbers: RandomNumber,
    Special: RandomSpecial
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


let password = '';
const characterTypes = Lower + Upper + Numbers + Special;
const characterArr = [{Lower}, {Upper}, {Numbers}, {Special}].filter(item => Object.values(item)[0]);

for(let i=0; i<length; i+=characterTypes) {
  characterArr.forEach(type => {
    const charFunction = Object.keys(type)[0];

    password += randomGeneration[charFunction]();
  });
 } return password
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

