const show = prompt('Enter the show.');
const url = `https://api.tvmaze.com/singlesearch/shows?q=${show}`;
const response = await fetch(url);
const responseJSON = await response.json();
console.log(responseJSON);