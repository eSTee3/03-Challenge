// Array of numbers that can be used as characters
var allNumberCharacters = ["0","1","2","3","4","5","6","7","8","9"];
// Array of lower-case letters can be used as characters
var allLowerCaseCharacters = ["a","b","c", "d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
// Array of upper-case letters can be used as characters
var allUpperCaseCharacters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
// Array of special characters can be used within the password.  NOTE the "\" requires to be doubled in order to be recognized correctly
var allSpecialCharacters = ["@","%","+","\\","/","'","!","#","$","^","?",":",",",")","(","}","{","]","[","~","-","_","."];

// Entire funtion containing all pop-up windows that present to the user in order to formulate a password that meets their criteria
function generatePasswordInfo() {
    
  // Presents the user with a text-entry field, asking for the desired password length
    var getPasswordLength = parseInt(prompt("Please tell me how many characters you'd like your password to be.  NOTE: Your password must be at least 8 characters in length and no more than 128"));
    // Validates the number entered is not less than 8
    if(getPasswordLength < 8 ) {
      alert("A minimum of 8 characters is required and you've entered "+getPasswordLength+" characters.  Please try again");
      generatePassword();
    }
    // Validates the number entered is not more than 128
    if(getPasswordLength > 128 ) {
      alert("A maximum of 128 characters is allowed and you've entered "+getPasswordLength+" characters.  Please try again");
      generatePassword();
    }
    // Validates the entry is an integer 
    if (isNaN(getPasswordLength)) {
      alert("I'm sorry, you've entered "+getPasswordLength+", instead of a number from 8 to 128.  Please try again.");
      generatePassword();
  }

  //Series of pop-up windows, asking what types of characters the user wants to include in their password
    var lowerCase = window.confirm("Click OK if to include LOWER CASE characters in your password or click Cancel if you want to exclude them.");
    var upperCase = window.confirm("Click OK if to include UPPER CASE characters in your password or click Cancel if you want to exclude them.");
    var numbers = window.confirm("Click OK if to include NUMBERS in your password or click Cancel if you want to exclude them.");
    var specialCharacters = window.confirm("Click OK if to include SPECIAL characters in your password or click Cancel if you want to exclude them.");
    var saveYourPassword = window.confirm("IMPORTANT!!!!  Make sure to copy this password into your password keeper solution!  If you don't yet have one, you may want to research one here:  https://www.wikiwand.com/en/List_of_password_managers")

    // If end user selects the "Cancel" button for every character type, this will force the usuer back to the beginning of the character type prompts via the "return" action.
    if (!lowerCase && !upperCase && !numbers && !specialCharacters && !saveYourPassword) {
      alert("I'm sorry, a minimum of one character type is required.  Please try again.");
      return;  
  }

    var passwordInfo = {
      passwordLength: getPasswordLength,
      lowerCase: lowerCase,
      upperCase: upperCase,
      numbers: numbers,
      specialCharacters: specialCharacters
    };

  return passwordInfo; 
}

// Get a random character from an array
function getRandomChar(arr) {
  var randomChar = Math.floor(Math.random() * arr.length);
  var selectedChar = arr[randomChar];
  return selectedChar;
}

// Function to actually generate the password with all of the user's requirements
function generatePassword() {
  var passwordIncludes = generatePasswordInfo();
  var createdPassword = [];
  var availableCharacters = [];

  // If the user chose to use lower case characters, this will will randomly select one
  if(passwordIncludes.lowerCase) {
    availableCharacters = availableCharacters.concat(allLowerCaseCharacters);
  }
  // If the user chose to use upper case characters, this will will randomly select one
  if(passwordIncludes.upperCase) {
    availableCharacters = availableCharacters.concat(allUpperCaseCharacters);
  }
  // If the user chose to use numbers, this will will randomly select one
  if(passwordIncludes.numbers) {
    availableCharacters = availableCharacters.concat(allNumberCharacters);
  }
  // If the user chose to use special characters, this will will randomly select one
  if(passwordIncludes.specialCharacters) {
    availableCharacters = availableCharacters.concat(allSpecialCharacters);
  }
  // Builds the actual password via randomly selected characters from the arrays chosen by the user
  for (var i = 0; i < passwordIncludes.passwordLength; i++) {
    var c = getRandomChar(availableCharacters);

    // Adds caracters to password and returns the array's total count
    createdPassword.push(c);
  }

  // Combines all characters via join (with no separator)
  return createdPassword.join("");
}

// This references the generate element within the html
var generateBtn = document.querySelector("#generate");

// Displays the generated password into the password element within the html
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.innerHTML = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);