
// Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassword() {

  var lowAlphabet = ['a','b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  var capAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' ]
  var symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '_', '-', '+', '<', '>', '?', '/' ]
  var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9']




  var psLength = prompt("How long do you want the password to be?");

    if(psLength > 8 && psLength < 128) {

      var wantAlpha = confirm("Do you want the password to contain lower case letters from the alphabet?");
      var capitalAlpha = confirm("Do you want the password to contain capital case letters from the alphabet?");
      var wantNumbers = confirm("Do you want the password to contain numbers?");
      var wantsymbols = confirm("Do you want the password to contain symbols?");
      var randomGenerator = [];
      var newPassword = [];



      if(wantAlpha) randomGenerator = randomGenerator.concat(lowAlphabet);
      if(capitalAlpha) randomGenerator = randomGenerator.concat(capAlphabet)
      if(wantNumbers) randomGenerator = randomGenerator.concat(numbers);
      if(wantsymbols) randomGenerator = randomGenerator.concat(symbols);
      
      

      for(var i=0; i<psLength; i++) {
        var randomCode = getRandomCode(randomGenerator.length)
        var randomCharacters = randomGenerator[randomCode];
        newPassword.push(randomGenerator[randomCode]);}
      return newPassword.join(''); 
      
}

      else {alert("Invalid length, choose between 8 and 128 characters");
        return ; 
  }

}


      function getRandomCode(all) {
        return Math.floor(Math.random() * Math.floor(all));
  }




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
