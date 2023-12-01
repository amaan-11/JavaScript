function diceroll()
{
  return Math.floor(Math.random()*7)
}
let mission = 'not accomplished'
while (mission == 'not accomplished')
{
  let roll=diceroll()
  if (roll==6)
  {
    mission='accomplished'
    document.getElementById("rolls").innerHTML += `<li>Rolled a 6</li>`
    break;
  }
  else
  {
    document.getElementById("rolls").innerHTML += `<li>Rolled a ${roll}</li>`
  }
}