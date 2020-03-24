var passwordLength = prompt('Choose a password character length-between 8 and 128');
    

    for (var i = 0; i< passwordLength; i++)  {
        
        if (passwordLength === null){
            console.log('no password selected')
        
        } else if (passwordLength < 8 || passwordLength > 128){
            alert('Needs to be between 8 and 128');
            console.log('password not within range');
            // do I want another prompt here for another number?
            prompt('Choose password character length, again.');
        
        } else {
            alert('Good');
            console.log('good');
        }
    }
var passwordTypelower = confirm('Would you like the password to contain lowercase?');
var passwordTypeupper = confirm('Would you like the password to contain uppercase?');
var passwordTypenumber = confirm('Would you like the password to contain numbers?');
var passwordTypespecial = confirm('Would you like the password to contain special characters?');

// this is going to contain a 'string' and 4 true/falses
function passwordType (passwordLength, passwordTypelower, passwordTypeupper, passwordTypenumber, passwordTypespecial)

// this is going to contain a 'string' and 4 different arrays
function passwordParts (passwordLength, lowerChoices, upperChoices, numberChoices, symbolChoices)





// do I change i to equal the passwordLeng prompt
// for (var i = 0; i < passwordLength; i++) {
    
    // console.log(passwordLength[i])
  
    // var lowerGuess = lowerChoices[Math.floor(Math.random() * lowerChoices.length)];
  // var upperGuess = upperChoices[Math.floor(Math.random() * upperChoices.length)];
  // var numberGuess = numberChoices[Math.floor(Math.random() * numberChoices.length)];
  // var symbolGuess = symbolChoices[Math.floor(Math.random() * symbolChoices.length)];

}
var lowerChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperChoices = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numberChoices = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var symbolChoices = ["!","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~"];