function diceroll(sides)
{
  sides=sides+1
  return Math.floor(Math.random()*sides);
}
let mission = 'not accomplished';
let sides=parseInt(prompt("Enter the number of sides on the dice"))
while (mission == 'not accomplished')
{
  let roll=diceroll(sides);
  if (roll==sides)
  {
    mission='accomplished';
    document.getElementById("rolls").innerHTML += `<li>Rolled a ${roll}</li>`;
    break;
  }
  else
  {
    document.getElementById("rolls").innerHTML += `<li>Rolled a ${roll}</li>`;
  }
}