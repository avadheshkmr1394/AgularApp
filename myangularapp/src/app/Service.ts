
import { Injectable } from '@angular/core';
import { mlProductList } from '../app/data';
import { employeesList } from '../app/data'
import { from, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Response, Http } from '@angular/http';
// import 'rxjs/add/operator/map'

@Injectable({
    providedIn: 'root'
})
export class EmployeeService {

    constructor(private http: Http) {

    }


    params: any;
    createproduct(data: mlProductList): void {
        throw new Error("Method not implemented.");
    }
    productList: mlProductList[];
    getproductlist() {
        this.productList = [{
            total: 0,
            quantity: 0,
            productname: 'nokia5.1',
            productdescription: '3000 mah',
            productdescription01: '4 GB RAM 64 GB Internal storage',
            productcost: '12,000',
            productsrc: 'assets/images/nokia5.1.jpg',
        },
        ];
        return this.productList;
    }

    createEmployeeList(data: employeesList): void {
        throw new Error("Method not implemented.");
    }
    empList: employeesList[];
    dashbordlist: []
    getEmployeeList() {

        this.empList = [{
            StudentName: 'Avadhesh',
            Address: 'noida',
            Email: 'is.kmr1394@gmail.com',
            Contact: '1234567894'
        }]
        return this.empList;
    }
    getDashboardData() {

        debugger
        this.http.get("http://localhost:56612/Employee/GetEmployees").subscribe(data => {
            return data.json();
        })
    }
}  