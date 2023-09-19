'use strict';

//Variables:
const selectInput = document.querySelector('.js-input-select');
const btnPlay = document.querySelector('.js-btn');
const result = document.querySelector('.js-msg');
const playerCount = document.querySelector('.js-player-count');
const cpuCount = document.querySelector('.js-cpu-count');
let resultMessage = '';
let playerScore = 0;
let cpuScore = 0;

//Función para que la CPU haga una jugada aleatoria:
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

//Función para establecer resultado del movimiento aleatorio de la CPU:
function randomCpuMove() {
  let randomNum = getRandomNumber(9);
  if (randomNum <= 3) {
    return 'Piedra';
  } else if (randomNum >= 7) {
    return 'Papel';
  } else {
    return 'Tijera';
  }
}

//Función para comparar jugada del usuario y jugada CPU:
function compareMovements() {
  const playerMove = selectInput.value;
  const cpuMove = randomCpuMove();

  if (playerMove === cpuMove) {
    resultMessage = 'Empate';
  } else if (
    (playerMove === 'Piedra' && cpuMove === 'Tijera') ||
    (playerMove === 'Papel' && cpuMove === 'Piedra') ||
    (playerMove === 'Tijera' && cpuMove === 'Papel')
  ) {
    resultMessage = '¡Has ganado!';
  } else {
    resultMessage = '¡Has perdido!';
  }
  result.innerHTML = resultMessage;
}

//Función para actualizar contador del jugador y de la CPU y que no se pongan números negativos:
const countGame = () => {
  playerCount.innerHTML = playerScore;
  cpuCount.innerHTML = cpuScore;

  if (resultMessage === '¡Has ganado!') {
    playerScore++;
    if (cpuScore > 0) {
      cpuScore--;
    }
  } else if (resultMessage === '¡Has perdido!') {
    cpuScore++;
    if (playerScore > 0) {
      playerScore--;
    }
  }
};

//Función para actualizar los movimientos del juego:
const finalMovements = () => {
  let Movements = 0;

  if (Movements >= 10) {
    result.innerHTML = '¡El juego ha terminado!';
    Movements++;
  }
};

//Función manejadora al hacer click en el botón Jugar:
const handleClick = () => {
  compareMovements();
  countGame();
  finalMovements();
};

//Eventos:
btnPlay.addEventListener('click', handleClick);
