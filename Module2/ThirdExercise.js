'use strict';

let doggos = [];

for (let i = 1; i<=6; i++) {
    const name = prompt('Enter name.');
    doggos.push(name);
}

doggos.sort();
doggos.reverse();

for (let i of doggos) {
    document.getElementById("dogs").innerHTML += `<li>${i}</li>`;
}