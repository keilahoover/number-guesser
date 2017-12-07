var randomNum;
var min = 0;
var max = 100;
var userInput = document.getElementById('userInput');
var guessButton = document.getElementById('guessBtn');
var clearButton = document.getElementById('clearBtn');
var numberGuessed = document.getElementById('userGuess');
var feedback = document.getElementById('feedback');
var resetButton = document.getElementById('resetBtn');
var submitButton = document.getElementById('submitBtn');
var minInput = document.getElementById('minInput');
var maxInput = document.getElementById('maxInput');

// Reset page to default and generate a new random number each reload
window.addEventListener('load', function(event) {
  console.log(randomNum);
  generateRandomNumber();
});

// When anything is entered in input field, the clear and guess button are active
userInput.addEventListener('keyup', function() {
  if (userInput.value === '') {
    clearButton.disabled = true;
  } else {
    clearButton.disabled = false;
    guessButton.disabled = false;
  }
})  
// Does above event listener need a semi colon at the end?

// Showcase user's guess
guessButton.addEventListener('click', function (event) {
  event.preventDefault();
  numberGuessed.innerText = userInput.value;
  checkGuess();
  resetButton.disabled = false;
});

// Event Listener for reset (generate new random number,reset to default setting) remove attr?
resetButton.addEventListener('click', function() {
  window.location.reload(true);
});

// Generate random number between 1-100 (when the page loads and when resets and when the user guesses right number)
function generateRandomNumber() {
  randomNum = parseInt(Math.floor(Math.random() * (max - min) + min));
  console.log(randomNum);
}

// compare randomNum w/ userInput.value AND only accept numerical entries AND error if guess is outside range
function checkGuess() {
  var userNum = parseInt(userInput.value);
  if (isNaN(userNum)) {
    feedback.innerText = 'That is not a number!';
    numberGuessed.innerText = 'Error';
    } else if (randomNum === userNum) {
    feedback.innerText = 'BOOM!';
    } else if (randomNum < userNum) {
    feedback.innerText = 'That is too high';
    } else {
    feedback.innerText = 'That is too low';
    }
  }

 submitButton.addEventListener('click', function(event) {
  event.preventDefault();
  min = minInput.value;
  max = maxInput.value;
  generateRandomNumber(min, max);
  console.log(min);
  console.log(max);
});

// The application should display an error if the guess is outside of the range of possible answers.

// Upon successful win, user’s range is updated:
// Every time the user wins a round increase the maximum number by 10.
// Every time the user wins a round decrease the minimum number by 10.
// Appropriate UI is incorporated such that user understands what is happening.

// Want JS to know what the user entered for min and max
// How to reassign current min and max
// after that you need to build in alert system 
