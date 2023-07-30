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

// Function to generate password based on user criteria
function generatePassword() {
  // Prompt for password length
  var passwordLength = prompt("Enter password length (between 8 and 128 characters):");

  // Check if the user entered a valid password length
  if (passwordLength === null) {
    // If the user clicks cancel, exit the function
    return "";
  } else {
    passwordLength = parseInt(passwordLength);
    if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
      alert("Please enter a valid password length between 8 and 128 characters.");
      return "";
    }
  }

  // Prompt for character types to include in the password
  var includeLowercase = confirm("Include lowercase letters?");
  var includeUppercase = confirm("Include uppercase letters?");
  var includeNumeric = confirm("Include numeric characters?");
  var includeSpecialChars = confirm("Include special characters?");

  // Check if the user selected at least one character type
  if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecialChars) {
    alert("You must select at least one character type to generate the password.");
    return "";
  }

  // Define character sets based on user choices
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericChars = "0123456789";
  var specialChars = "!@#$%^&*()_-+=<>?/{}~";

  // Create the character set to use for password generation
  var charSet = "";
  if (includeLowercase) {
    charSet += lowercaseChars;
  }
  if (includeUppercase) {
    charSet += uppercaseChars;
  }
  if (includeNumeric) {
    charSet += numericChars;
  }
  if (includeSpecialChars) {
    charSet += specialChars;
  }

  // Generate the password
  var password = "";
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * charSet.length);
    password += charSet.charAt(randomIndex);
  }

  return password;
}


