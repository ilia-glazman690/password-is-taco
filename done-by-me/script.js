// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  var upperCaseSet = [ "A", "B", "C",]
  var numberSet= [1,2,3]
  var userPicked

  // sets password length
  var pLength = window.prompt("enter number between 8 and 128")
  console.log(pLength)

  // run program to check for number, if false ask for number
    if (pLength >= 8 & pLength <= 128) {
      console.log(pLength);
      var isUpperCase = confirm("Do you want uppercase?")
      console.log(isUpperCase);
      var isNumber = confirm("Do you want numbers?")
      console.log(isNumber)
      if (isUpperCase|| isNumber) {
        console.log("working");
      } else {
        console.log("pick at least 1 character set");
        generatePassword();
      }
      
    }
    else {

    }
}

// var upperCase = window.prompt("Do you want uppercase letters yes or no?");
// console.log(upperCase);

// Write password to the #password input
function writePassword() {
  // alert("working")
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

element.addEventListener("click", myFunction);

function myFunction() {
  document.getElementById("password").innerHTML = "Generate Password";
}