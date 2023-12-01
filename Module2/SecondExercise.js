'use strict';

let participants = [];
const num_participants = parseInt(prompt('How many participants?'));

for (let i = 1; i<=num_participants; i++) {
    const name = prompt('Enter name.');
    participants.push(name);
}

participants.sort();

for (let i of participants) {
    document.getElementById("list").innerHTML += `<li>${i}</li>`;
}