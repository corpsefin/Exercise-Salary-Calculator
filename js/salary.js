// import * as SalaryCalculator from './calculateSalary.js';


function Salary(date, hours, hourlyWage){
    this.date = date;
    this.hours = hours;
    this.hourlyWage = hourlyWage;
}

Salary.prototype.calculate = function() {
    if(this.hours < 9){
        return this.hours * this.hourlyWage;
    }
    else{
        return this.hours <= 10 ? (8 * this.hourlyWage) + ((this.hourlyWage * 1.5) * (this.hours - 8)) : 
                                  (8 * this.hourlyWage) + ((this.hourlyWage * 1.5) * 2) + ((this.hourlyWage * 2) * (this.hours - 10));
    }
}

Salary.prototype.createNew = function(){
    let resultTable = document.getElementById('resultTable');
    let dataRow = document.createElement('tr');
    let dateData = document.createElement('td');
    let hoursData = document.createElement('td');
    let payData = document.createElement('td');
    
    dateData.textContent = this.date;
    hoursData.textContent = this.hours;
    payData.textContent = this.calculate();

    dataRow.appendChild(dateData);
    dataRow.appendChild(hoursData);
    dataRow.appendChild(payData);

    resultTable.appendChild(dataRow);
}

export default Salary;