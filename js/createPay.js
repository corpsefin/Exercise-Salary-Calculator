import {calculatePay} from './calculatePay.js';

function createPay(date, hours){
    let resultTable = document.getElementById('resultTable');
    let dataRow = document.createElement('tr');
    let dateData = document.createElement('td');
    let hoursData = document.createElement('td');
    let payData = document.createElement('td');

    dateData.textContent = date;
    hoursData.textContent = hours;

    payData.textContent = calculatePay(hours);

    dataRow.appendChild(dateData);
    dataRow.appendChild(hoursData);
    dataRow.appendChild(payData);

    resultTable.appendChild(dataRow);
}

export { createPay };