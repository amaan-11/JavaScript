'use strict';
let wrongattempts=[];
let guess= 1;
while (guess!=0)
{
  guess=prompt("Guess the number in my mind");
  if (guess==0)
  {
    break;
  }
  wrongattempts.push(guess);
}

wrongattempts.sort((a,b) => a-b);
for (let i of wrongattempts) {
    console.log(i)
}
