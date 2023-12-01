  'use script';
  const year=parseInt(prompt("Enter a year to check whether it is leap or not"))
  if (year % 4 == 0){
    if (year % 100 == 0){
      if (year % 400 == 0){
        document.querySelector('#leap').innerHTML = year+" is a leap year"
      }
      else{
        document.querySelector('#leap').innerHTML=year+' is not a leap year'
      }
    }
    else{
      document.querySelector('#leap').innerHTML=year+' is a leap year'
    }
  }
  else{
    document.querySelector('#leap').innerHTML=year+' is not a leap year'
  }