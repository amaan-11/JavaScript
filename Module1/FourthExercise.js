'use strict';
let name = prompt("What is your name?")
let num = Math.floor(Math.random()*5);
const gryffindor=1
const slytherin=2
const ravenclaw=2
const hufflepuff=2

switch(num)
{
  case gryffindor:
    document.querySelector('#sort').innerHTML = 'Congratulations ' + name + ' you are in Gryffindor'
    break;
  case slytherin:
    document.querySelector('#sort').innerHTML = 'Congratulations ' + name + ' you are in Slytherin'
    break;
  case ravenclaw:
    document.querySelector('#sort').innerHTML = 'Congratulations ' + name + ' you are in Ravenclaw'
    break;
  case hufflepuff:
    document.querySelector('#sort').innerHTML = 'Congratulations ' + name + ' you are in Hufflepuff'
    break;
}