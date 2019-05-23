import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: []
})
export class CreateComponent implements OnInit {

  constructor(private employee: EmployeeService) { }

  ngOnInit() {
  }

  save(empForm: Employee) {
    this.employee.save(empForm);
    }

  update() {
    alert("Employee data saved");

}


}