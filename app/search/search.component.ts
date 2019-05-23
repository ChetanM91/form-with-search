import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: []
})
export class SearchComponent implements OnInit {
 
  constructor(private employee:EmployeeService) { }
  emplist:Employee[]=this.employee.list();
  searchtext:string='';
    
  ngOnInit() {
      
  }
    
     

    

}