'use strict';
let numbers=[]
for (let i=1; i<=5; i++)
{
  numbers.push(prompt("Please enter a number"))
}
for (let i=numbers.length-1; i>=0; i--)
console.log(numbers[i])