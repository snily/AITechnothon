import { Component, OnInit } from '@angular/core';
import employee from "../local_data/employee.json";
//import { EmployeeObj } from "../interfaces/employee";

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  p: number = 1;
  total_emp_arr : any;
  itemsPerPage = 10;
  total_emp : number;

  private _employeeList: any = employee;
  public get employeeList(): any {
    return this._employeeList;
  }
  public set employeeList(value: any) {
    this._employeeList = value;
  }
 // public countryList:{name:string, code:string}[] = countries;
  constructor() { 
     console.log(this._employeeList)
    
      
    this.total_emp_arr=[];
    let j:number = 0;
    this.total_emp = this._employeeList.length;
  //  console.log(this.total_emp);
    for(let i=1; i<=this.total_emp;i++){
        this.total_emp_arr.push(i);
    } 
    console.log(this.total_emp_arr);
  
  }

  ngOnInit(): void {
  }
  changeItemsPerPage(val1:string){
    console.log(val1);
    this.itemsPerPage = Number(val1);
  }
  SetPageNumber(val1:any){
    this.p = val1;
  }

}