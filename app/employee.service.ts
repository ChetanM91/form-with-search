import { Injectable } from '@angular/core';
import { Employee } from './employee';

@Injectable()
export class EmployeeService {
    emplist: Employee[] = [];
    /* Array
       
        save(a) {
            this.emplist.push(a);       //array
        
        }
        constructor() { }
        list() {
                      return this.emplist;      //array
        }
    }
    */

    save(emp:Employee) {     
        if (emp.firstname) {
            localStorage.setItem(emp.firstname, JSON.stringify(emp));       //localstorage
        }

    }
    list() {
        if (this.emplist = []) {
            for (let index = 0; index < localStorage.length; index++) {

                let emp:Employee = JSON.parse(localStorage.getItem(localStorage.key(index)));

                this.emplist.push(emp);

            }
            return this.emplist;
        }
    }
    constructor() { }
}



