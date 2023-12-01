'use strict';
let num1,num2,num3
num1 = parseInt(prompt("Give us first number"))
num2 = parseInt(prompt("Give us second number"))
num3 = parseInt(prompt("Give us third number"))
let sum, product,average;
sum=num1+num2+num3;
product=num1*num2*num3;
average=(num1+num2+num3)/3;
document.querySelector('#operator').innerHTML = "Sum, Product and Average is " + sum + ", " + product + ", " + average;
