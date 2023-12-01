'use strict';
let decish=confirm("Should i calculate the square root?");
if (decish == true)
{
  let number = parseInt(prompt("What do you want the square root of?"));
  let squareroot = Math.sqrt(number);
  document.querySelector('#sqrt').innerHTML='The square root of ' + number + ' is ' + squareroot;
}
else{
  document.querySelector('#sqrt').innerHTML='Alrighty';
}
