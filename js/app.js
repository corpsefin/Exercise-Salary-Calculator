import { createPay } from './createPay.js';

let date = document.getElementById('workDate');
let workHours = document.getElementById('workHours');
let submitHours = document.getElementById('submitHours');
let submitPressed = false;

submitHours.addEventListener('click', (event) =>{
    event.preventDefault();
    submitPressed = true;
    createPay(date.value, workHours.value);
});