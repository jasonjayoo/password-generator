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

  // var display prompt set for uppercase, lowercase, special (symbol), and numbers for users to include or not include in password creation.

  var hasUpper = confirm("Would you like uppercase letters in your password?");
  var hasLower = confirm("Would you like lowercase letters in your password?");
  var hasSpecial = confirm("Would you like special characters in your password?");
  var hasNumbers = confirm("Would you like numeric characters in your password?");

  // randomIndex set to be math.floor in conjunction with math.random to generate a randomized integers/characters.

  // if user selects to include uppercase characters, randomized uppercase characters will be pushed to 'possiblePassword' var.

  if (hasUpper === true) {
    for (let i = 0; i < length; i++){
      var randomIndex = Math.floor(Math.random() * upperCasedCharacters.length);
      var randomChar = upperCasedCharacters[randomIndex];
      possiblePassword.push(randomChar);
    };
  }

  //if user selects to include lowercase characters, randomized lowercase characters will be pushed to 'possiblePassword' var.

  if (hasLower === true) {
    for (let i = 0; i < length; i++){
      var randomIndex = Math.floor(Math.random() * lowerCasedCharacters.length);
      var randomChar = lowerCasedCharacters[randomIndex];
      possiblePassword.push(randomChar);
    };
  }

  //if user selects to include special characters, randomized special characters will be pushed to 'possiblePassword' var.

  if (hasSpecial === true) {
    for (let i = 0; i < length; i++){
      var randomIndex = Math.floor(Math.random() * specialCharacters.length);
      var randomChar = specialCharacters[randomIndex];
      possiblePassword.push(randomChar);
    };
  }
  
  //if user selects to include numeric characters, randomized numeric characters will be pushed to 'possiblePassword' var.

  if (hasNumbers === true) {
    for (let i = 0; i < length; i++){
      var randomIndex = Math.floor(Math.random() * numericCharacters.length);
      var randomChar = numericCharacters[randomIndex];
      possiblePassword.push(randomChar);
    };
  }

// once the selections for different characters has been made and pushed into the 'possiblePassword' var the entire randomChar will be pushed into the 'results' var

  for (let i = 0; i < length; i++){
    var randomIndex = Math.floor(Math.random() * possiblePassword.length);
    var randomChar = possiblePassword[randomIndex];
    results.push(randomChar);
  };

// return the results var with .join to remove the quotations from each random character and join it in one sequenced line. 

  return results.join('');

}

// clipboard (results.join('');)

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

