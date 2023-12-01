let num_rolls=parseInt(prompt("Enter how many die to roll"))
let sum_rolls = 0
for (let i=1;i<=num_rolls;i++)
{
  sum_rolls = sum_rolls + Math.floor(Math.random() * 6)
}
document.querySelector('#die').innerHTML=sum_rolls