'use strict';

//Variables:
const btnPlay = document.querySelector('.');
const selectInput = document.querySelector('.');
const result = document.querySelector('.');
const playerCount = document.querySelector('.');
const cpuCount = document.querySelector('.');

//Función para que la maquina haga una jugada aleatoria:
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

btnPlay.addEventListener('click', handleClick);
