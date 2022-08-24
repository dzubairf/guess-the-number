'use strict';
let userScore = 10;
let highScore = 0;
let secretNumber = Math.floor(Math.random() * 100 + 1);

function displayMessage(element, message) {
  document.querySelector(element).textContent = message;
}

function reduceScore() {
  userScore--;
  displayMessage('.score', userScore);
}

function check() {
  const userGuess = Number(document.querySelector('.guess').value);
  if (userScore <= 0) {
    displayMessage('.message', '⛔️ No Guess left');
    resetFunction();
  } else if (!userGuess) {
    displayMessage('.message', '⛔️ No Number');
  } else if (userGuess === secretNumber) {
    displayMessage('.message', '👍 Correct Answer');
    if (userScore > highScore) {
      highScore = userScore;
    }
    displayMessage('.highscore', highScore);
    displayMessage('.number', secretNumber);
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
  } else if (userGuess != secretNumber) {
    userGuess < secretNumber
      ? displayMessage('.message', '🔻 Too Low')
      : displayMessage('.message', '🔺 Too High');
    reduceScore();
  }
}

function resetFunction() {
  userScore = 10;
  secretNumber = Math.floor(Math.random() * 100 + 1);
  displayMessage('.score', userScore);
  displayMessage('.message', 'Start guessing...');
  displayMessage('.number', '?');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
}

document.querySelector('.check').addEventListener('click', check);
document.querySelector('.again').addEventListener('click', resetFunction);
