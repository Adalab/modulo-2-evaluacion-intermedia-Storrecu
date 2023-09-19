'use strict';

//Variables:
const selectInput = document.querySelector('.js-input-select');
const btnPlay = document.querySelector('.js-btn');
const result = document.querySelector('.js-msg');
const playerCount = document.querySelector('.js-player-count');
const cpuCount = document.querySelector('.js-cpu-count');

//Función para que la maquina haga una jugada aleatoria:
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

//Función para movimiento aleatorio de CPU:
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

//Función para comparar jugadas entre el usuario y la CPU:
function handleClick() {
  const playerMove = selectInput.value;
  const cpuMove = randomCpuMove();
  let resultMEssage = '';
}

btnPlay.addEventListener('click', handleClick);
