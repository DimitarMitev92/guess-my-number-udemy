'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const messageDisplay = (message) => document.querySelector('.message').textContent = message;
const changeBodyBackground = (color) => document.querySelector('body').style.backgroundColor = color;
const changeClassNumberStyleWidth = (width) => document.querySelector('.number').style.width = width;
const changeClassNumberTextContent = (text) => document.querySelector('.number').textContent = text;
const changeClassHighScoreTextContent = (text) => document.querySelector('.highscore').textContent = text;
const changeClassScoreTextContent = (text) => document.querySelector('.score').textContent = text;
const changeClassGuessValue = (text) => document.querySelector('.guess').value = text;



document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    // When there is no input
    if (!guess) {
        // document.querySelector('.message').textContent = '⛔ No number!'
        messageDisplay('⛔ No number!');
        //when player wins
    } else if (guess === secretNumber) {
        // document.querySelector('.message').textContent = '🎉 Correct Number!'
        messageDisplay('🎉 Correct Number!');
        // document.querySelector('body').style.backgroundColor = '#60b347';
        changeBodyBackground('#60b347');
        // document.querySelector('.number').style.width = '30rem';
        changeClassNumberStyleWidth('30rem');
        // document.querySelector('.number').textContent = secretNumber;
        changeClassNumberTextContent(secretNumber);
        if (highScore < score) {
            highScore = score;
            // document.querySelector('.highscore').textContent = highScore;
            changeClassHighScoreTextContent(highScore);

        }
        // When guess is wrong
    } else if (guess !== secretNumber) {
        if (score > 1) {
            // document.querySelector('.message').textContent = guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
            messageDisplay(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
            score--;
            // document.querySelector('.score').textContent = score;
            changeClassScoreTextContent(score);
        } else {
            // document.querySelector('.message').textContent = '💥 You lose the game!';
            messageDisplay('💥 You lose the game!');
            // document.querySelector('.score').textContent = 0;
            changeClassScoreTextContent(0);

        }
    }
    // When guess is too high
    // else if (guess > secretNumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = '📈 Too high!'
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //         document.querySelector('.message').textContent = '💥 You lose the game!'
    //     }
    //     // When guess is too low
    // } else if (guess < secretNumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = '📉 Too low!'
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //         document.querySelector('.message').textContent = '💥 You lose the game!'
    //     }
    // }
});

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1

    // document.querySelector('body').style.backgroundColor = '#222'
    changeBodyBackground('#222');
    // document.querySelector('.message').textContent = 'Start guessing...'
    messageDisplay('Start guessing...');
    // document.querySelector('.number').style.width = '15rem';
    changeClassNumberStyleWidth('15rem')
    // document.querySelector('.number').textContent = '?';
    changeClassNumberTextContent('?');
    // document.querySelector('.guess').value = '';
    changeClassGuessValue('');
    // document.querySelector('.score').textContent = score;
    changeClassScoreTextContent(score);
})