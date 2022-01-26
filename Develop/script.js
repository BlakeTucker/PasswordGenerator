// Assignment code here
var charUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var charLower = "abcdefghijklmnopqrstuvwxyz";
var charSpecial = "!#$%&'()*+,-./:;<=>?@][^_`{|}~";
var charNumber = "0123456789";
var charCollector = "";


// Get references to the #generate element
var generateBtn = document.querySelector("#generate"); 


// Need to take in password length and use it.
// Need to randomize output. 


function generatePassword() {
  var passwordPrompt = parseInt(
    window.prompt("Choose password length from 5-20 characters.")
  );
  console.log(passwordPrompt) 

    if (passwordPrompt < 5 || passwordPrompt > 20 || !passwordPrompt) 
    
    {alert("Please enter a valid number!");
  return generatePassword();
}

      var confirmCharNumber = confirm("Do you want to include numbers?");
      console.log(confirmCharNumber)
      var confirmCharSpecial = confirm("Do you want to include special characters?");
      console.log(confirmCharSpecial)
      var confirmCharUpper = confirm("Do you want to include upper case letters?");
      console.log(confirmCharUpper)
      var confirmCharLower = confirm("Do you want to include lower case letters?");
      console.log(confirmCharLower)
      
  if (confirmCharUpper === true) {
    charCollector = charCollector + charUpper;
  }

  if (confirmCharLower === true) {
    charCollector = charCollector + charLower;
  }

  if (confirmCharSpecial === true) {
    charCollector = charCollector + charSpecial
  }

  if (confirmCharNumber === true) {
    charCollector = charCollector + charNumber
    console.log
  }

  else if (
    confirmCharUpper === false && 
    confirmCharSpecial === false &&
    confirmCharNumber === false &&
    confirmCharLower === false){
    alert("Must choose atleast one option.")
    return generatePassword();
}

  var randomPassword = ""
  for (let i = 0; i < passwordPrompt; i++) {
    var randomIndex = Math.floor(Math.random() * charCollector.length)
    var randomChar = charCollector[randomIndex];
    randomPassword += randomChar
  }

  return `Generated Password: 
${randomPassword}`;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password; 

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);