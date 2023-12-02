let list_num = [];
let mission='not accomplished';
while (mission==='not accomplished')
{
  let number=parseInt(prompt("Enter a number"));
  for (let i of list_num)
  {
    if (number===i)
    {
      mission='accomplished';
      for (let j of list_num)
      {
        console.log(j);
      }
      break;
    }
    else
    {
      list_num.push(number);
    }
  }
}