import Salary from './salary.js';
import * as WorkplaceInfo from './workplaceInfo.js';

let workDate = document.getElementById('workDate');
let workHours = document.getElementById('workHours');
let submitHours = document.getElementById('submitHours');

submitHours.addEventListener('click', (event) =>{
    event.preventDefault();
    let newSalary = new Salary(workDate.value, workHours.value, WorkplaceInfo.getWage());

    newSalary.createNew();
});