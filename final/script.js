'use strict';

// Selecting elements
const score0 = document.getElementById('score--0');
const score1 = document.getElementById('score--1');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const pScore0 = document.getElementById('current--0');
const pScore1 = document.getElementById('current--1');
const dice = document.querySelector('.dice');
const rollDice = document.querySelector('.btn--roll');
const holdDice = document.querySelector('.btn--hold');
const newGame = document.querySelector('.btn--new');

dice.classList.add('hidden');

let currentScore, score, activePlayer, playing;

const init = function(){
  currentScore = 0;
  score = [0,0];
  activePlayer = 0;
  playing = true;

  score0.textContent = 0;
  score1.textContent = 0;
  pScore0.textContent = 0;
  pScore1.textContent = 0;

  dice.classList.add('hidden');
  
  player0.classList.remove('player--winner');
  player1.classList.remove('player--winner');

  player0.classList.add('player--active');
  player1.classList.remove('player--active');
};
init();


const switchPlayer = function(){
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};

rollDice.addEventListener('click', function(){
  if(playing){
    let diceNumber = parseInt(Math.random() * 6) + 1;
  
    dice.classList.remove('hidden');
    dice.src = `dice-${diceNumber}.png`;
    
    
    if(diceNumber !== 1){
      currentScore += diceNumber;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    }
    else {
      switchPlayer();
    }
  }
});


holdDice.addEventListener('click', function(){
  if(playing){
    score[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      score[activePlayer];

    if (score[activePlayer] >= 20) {
      dice.classList.add('hidden');
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      switchPlayer();
    }
  }
  
});


newGame.addEventListener('click', init);






