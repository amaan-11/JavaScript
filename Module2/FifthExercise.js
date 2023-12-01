let list_num = [];
let check=true;
let run=0
while (run<15)
{
  let number=parseInt(prompt("Enter a number"));
  for (let i of list_num)
  {
    if (number===i)
    {
      run=15;
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

