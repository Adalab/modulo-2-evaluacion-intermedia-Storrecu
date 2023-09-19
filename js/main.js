'use strict';

//Variables:
const selectInput = document.querySelector('.js-input-select');
const btnPlay = document.querySelector('.js-btn');
const result = document.querySelector('.js-msg');
const playerCount = document.querySelector('.js-player-count');
const cpuCount = document.querySelector('.js-cpu-count');
let resultMessage = '';
let Movements = 0;

//Función para que la CPU haga una jugada aleatoria:
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

//Función para establecer resultado del movimiento aleatorio:
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

//Función para actualizar contador del jugador y de la CPU:
const countGame = () => {
  if (resultMessage === '¡Has ganado!') {
    playerCount.innerHTML++;
    if (cpuCount.innerHTML > 0) {
      cpuCount.innerHTML--;
    }
  } else if (resultMessage === '¡Has perdido!') {
    cpuCount.innerHTML++;
    if (playerCount.innerHTML > 0) {
      playerCount.innerHTML--;
    }
  }
};

//Función para comparar jugadas entre el usuario y la CPU:
function handleClick() {
  const playerMove = selectInput.value;
  const cpuMove = randomCpuMove();
  if (Movements >= 10) {
    result.innerHTML = '¡El juego ha terminado!';
  }

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

  countGame();
  console.log(Movements++);
}

//Eventos:
btnPlay.addEventListener('click', handleClick);
