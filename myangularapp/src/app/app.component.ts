import { Component, Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, RouterOutlet, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { mlProductList, employeesList } from '../app/data';


import { EmployeeService } from '../app/Service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
@Injectable()
export class AppComponent implements OnInit {

  people$;
  public product: mlProductList[];
  public description: mlProductList;
  public Result: employeesList[]
  public empdescription: employeesList;
  constructor(
    private srvCart: EmployeeService,
    private activatedRoute: EmployeeService,
    // private empResult: EmployeeService
  ) { }
  ngOnInit() {
    debugger
    this.product = this.srvCart.getproductlist();
    this.Result = this.srvCart.getEmployeeList();
    this.people$ = this.srvCart.getDashboardData();
    this.activatedRoute.params.subscribe(param => {
      // tslint:disable-next-line: no-string-literal  
      this.description = this.product[param['id']];
      this.empdescription = this.Result[param['id']];
    });
    
    console.log(this.people$)
  }
}


