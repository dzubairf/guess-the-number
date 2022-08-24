'use strict';
let userScore = 10;
let highScore = 0;
let secretNumber = Math.floor(Math.random() * 100 + 1);

document.querySelector('.check').addEventListener('click', check);
document.querySelector('.again').addEventListener('click', resetFunction);
console.log(secretNumber);
function resetFunction() {
  userScore = 10;
  secretNumber = Math.floor(Math.random() * 100 + 1);
  document.querySelector('.score').textContent = userScore;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
}

function check() {
  const userGuess = Number(document.querySelector('.guess').value);
  if (userScore <= 0) {
    document.querySelector('.message').textContent = '⛔️ No Guess left';
    resetFunction();
    return;
  } else if (!userGuess) {
    document.querySelector('.message').textContent = '⛔️ No Number';
  } else if (userGuess === secretNumber) {
    document.querySelector('.message').textContent = '👍 Correct Answer';
    if (userScore > highScore) {
      highScore = userScore;
    }
    document.querySelector('.highscore').textContent = highScore;
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
  } else if (userGuess < secretNumber) {
    document.querySelector('.message').textContent = '🔻 Too Low';
    reduceScore();
  } else if (userGuess > secretNumber) {
    document.querySelector('.message').textContent = '🔺 Too High';
    reduceScore();
  }
}

function reduceScore() {
  userScore--;
  document.querySelector('.score').textContent = userScore;
}
