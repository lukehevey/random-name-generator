// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  if (password) {
    passwordText.value = password;
  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword() {
  var passwordLength = parseInt(window.prompt("How many characters would you like your password to contain?"));
  if (!(passwordLength >= 8 && passwordLength <= 128)) {
    alert("Must be in the range of 8 to 128 characters.")
    return
  }
  var specialChoice = window.confirm("Click OK to confirm including special characters.");
  var numericChoice = window.confirm("Click OK to confirm including numeric characters.");
  var lowercaseChoice = window.confirm("Click OK to confirm including lowercase characters.");
  var uppercaseChoice = window.confirm("Click OK to confirm including uppercase characters.");

  var str = '!@#$%^&*_-0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var pass = "";

  for (let i = 0; i < passwordLength; i++) {
    var number = Math.floor(Math.random()
      * str.length + 1);

    pass += str.charAt(number)
  }

  return pass;
}

function Run() {
  generateP();
}

