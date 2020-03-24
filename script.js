var lowerChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperChoices = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numberChoices = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var symbolChoices = ["!","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~"];

function getRandom(arr){
  var itemIndex = Math.floor(Math.random() * arr.length);
  var item = arr[itemIndex];
  return item;

}


function generatePassword(){

  var passwordLength = prompt('Choose a password character length-between 8 and 128');

  while(isNaN(passwordLength) === true){
      alert('Please choose numbers only.');
      passwordLength = prompt('Choose a password character length-between 8 and 128');
        while(passwordLength < 8 || passwordLength > 128){
        alert('Please choose between 8 and 128.');
        passwordLength = prompt('Choose a password character length-between 8 and 128');
        }
  }
}



var passwordTypelower = confirm('Would you like the password to contain lowercase?');
var passwordTypeupper = confirm('Would you like the password to contain uppercase?');
var passwordTypenumber = confirm('Would you like the password to contain numbers?');
var passwordTypespecial = confirm('Would you like the password to contain special characters?');



var newGeneratedPassword = '';
for (var i = 0; i < passwordLength; i++)  {
        
  if(passwordTypelower === true && newGeneratedPassword.length < passwordLength){
     newGeneratedPassword += getRandom(lowerChoices);
  }
  if(passwordTypeupper === true && newGeneratedPassword.length < passwordLength){
    newGeneratedPassword += getRandom(upperChoices);
  }
  if(passwordTypenumber === true && newGeneratedPassword.length < passwordLength){
    newGeneratedPassword += getRandom(numberChoices);
  }
  if(passwordTypespecial === true && newGeneratedPassword.length < passwordLength){
    newGeneratedPassword += getRandom(symbolChoices);
  }

  return newGeneratedPassword();
}


// Write password to the #password input
function writePassword() {
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)



