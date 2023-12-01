function concat(arr_strings)
{
  let mega_string=''
  for (let strings of arr_strings)
  {
    mega_string += strings
  }
  return mega_string
}
let list_string = []
num=parseInt(prompt("How many Strings do you want to concatenate"))
for (let i=1; i<=num; i++)
{
  let elem = prompt("Enter a String")
  list_string.push(elem)
}
let newstring=concat(list_string)
document.querySelector('#Concatenate').innerHTML = newstring