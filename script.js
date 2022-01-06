// list of symbols (specialChar)

var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.',
];

// list of numbers 0 - 9
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// list of lowerCased letters
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

// list of upperCased letters
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];
// linked to generate button under card footer of html doc
var generateBtn = document.querySelector("#generate");

// four possible character types randomly generated to be 'pushed' into the possible password variable. 
function generatePassword() {
  var possiblePassword = [];
  var results = [];

// parseInt to return the length of the password from a string to a numeric value
  var length = parseInt(prompt("How many characters do you like in your password? (Password needs to be between 8 - 128 characters)"));

  if (length < 8 || length > 128) {
    alert("Password needs to be between 8 - 128 characters");
    generatePassword();
  }

  // var display prompt set for uppercase, lowercase, special (symbols), and numbers for users to include or not include in password creation. confirm is used to verify if the user has selected to include any of them. 

  var hasUpper = confirm("Would you like uppercase letters in your password?");
  var hasLower = confirm("Would you like lowercase letters in your password?");
  var hasSpecial = confirm("Would you like special characters in your password?");
  var hasNumbers = confirm("Would you like numeric characters in your password?");


  // if user selects to include uppercase characters, randomized uppercase characters will be pushed (added to the end of) the 'possiblePassword' array. 

  if (hasUpper === true) {
    // i (initialize) will start at the value designated for 0 in this case 0 = A. The end condition of i less than length, with i++ to increase in the increment of 1.
    for (let i = 0; i < length; i++){
      // Math.floor used with Math.random to return a random whole number. In order to select random values from the upperCasedCharacters array.
      var randomIndex = Math.floor(Math.random() * upperCasedCharacters.length);
      // new var of randomChar created to incorporate global scope var of upperCasedCharacters with the var randomIndex created above. (stacked codes below follows this same logical pattern of coding - thus - no additional explanations will be added below). The result of the var randomCharacter will then be added with the .push method to be store in the var possiblePassword array.
      var randomCharacter = upperCasedCharacters[randomIndex];
      possiblePassword.push(randomCharacter);
    };
  }

  //if user selects to include lowercase characters, randomized lowercase characters will be pushed (added to the end of) the 'possiblePassword' array. 

  if (hasLower === true) {
    for (let i = 0; i < length; i++){
      var randomIndex = Math.floor(Math.random() * lowerCasedCharacters.length);
      var randomCharacter = lowerCasedCharacters[randomIndex];
      possiblePassword.push(randomCharacter);
    };
  }

  //if user selects to include special characters, randomized special characters will be pushed (added to the end of) the 'possiblePassword' array. 

  if (hasSpecial === true) {
    for (let i = 0; i < length; i++){
      var randomIndex = Math.floor(Math.random() * specialCharacters.length);
      var randomCharacter = specialCharacters[randomIndex];
      possiblePassword.push(randomCharacter);
    };
  }
  
  //if user selects to include numeric characters, randomized numeric characters will be pushed (added to the end of) the 'possiblePassword' array. 

  if (hasNumbers === true) {
    for (let i = 0; i < length; i++){
      var randomIndex = Math.floor(Math.random() * numericCharacters.length);
      var randomCharacter = numericCharacters[randomIndex];
      possiblePassword.push(randomCharacter);
    };
  }

// once the selections for different characters has been made, the randomIndex which will be a randomly generated character total of the gathered possiblePassword plus the length of the password chosen by the user will then be pushed (added to the end of) the 'possiblePassword' array then the entire randomChar will be pushed (added to the end of the) 'results' array.

  for (let i = 0; i < length; i++){
    var randomIndex = Math.floor(Math.random() * possiblePassword.length);
    var randomCharacter = possiblePassword[randomIndex];
    results.push(randomCharacter);
  };

// will produce the results of the random password generator algorithm. (.join)added to remove the quotations from each randomly generated characters value and join it into one sequenced line. 

  return results.join('');

}

// where function generate password() ends

// clipboard (results.join('');)

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

