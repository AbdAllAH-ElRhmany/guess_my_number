'use strict';

// console.log(message.textContent);
// message.textContent= 'test message...';
// console.log(message.textContent);

const inp = document.querySelector('.guess');
// console.log(inp.value);
// inp.value=25
// console.log(inp.value);

const checkBtn = document.querySelector('.check');
const againBtn = document.querySelector('.again');

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const numberDom = document.querySelector('.number');
const scoreDom = document.querySelector('.score');
const highScoreDom = document.querySelector('.highscore');
// numberDom.textContent = secretNumber;


const displayMessage = message =>{
  const messageDom = document.querySelector('.message');
  messageDom.textContent = message;
} 


checkBtn.addEventListener('click', function(){
  console.log(inp.value);
  console.log(secretNumber);
  const guess = Number(inp.value)

  if(!guess){
    // When there is no input
    console.log('No number!');
    displayMessage('No number!')

  } else if(guess === secretNumber){
    // When player wins
    displayMessage('Correct Number!');
    document.querySelector('body').style.backgroundColor = '#68b347'
    numberDom.textContent = secretNumber;
    if(score > highScore){
      highScore = score;
      highScoreDom.textContent = highScore;
      numberDom.style.width = '30rem';
    }
  } else if(guess !== secretNumber){
    if(score > 1){
      displayMessage(guess > secretNumber ? 'Too high!' :'Too low!');
       score--;
       scoreDom.textContent = score;
       
    }else{
       scoreDom.textContent = 0;
       displayMessage('You lost the game');
     }
  }

})

againBtn.addEventListener('click', function(){
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  scoreDom.textContent = score;
  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  numberDom.textContent = '??';
  inp.value = '';
  numberDom.style.width = '15rem';
  // highScoreDom.textContent = 0;
})