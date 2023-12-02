'use strict';
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];
const selection=document.getElementById('target');
const options1 = document.createElement('option');
const options2 = document.createElement('option');
const options3 = document.createElement('option');
options1.innerHTML += `<option value=${students[0].id}> ${students[0].name}</option>`;
options2.innerHTML += `<option value=${students[1].id}> ${students[1].name}</option>`;
options3.innerHTML += `<option value=${students[2].id}> ${students[2].name}</option>`;
selection.appendChild(options1);
selection.appendChild(options2);
selection.appendChild(options3);
