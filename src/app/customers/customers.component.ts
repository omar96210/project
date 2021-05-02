import { Component, OnInit } from '@angular/core';
import { Service } from '../services/service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
   page=1;
   collectionSize=200;
  Customerslist: any;
  Customersdata: any;
  initialPageSize = 10;
  result: any;
  constructor(public Service: Service) { }

  ngOnInit(): void {
    this.AllCustomers()
  }

  
  AllCustomers() {
    this.Service.GetCustomers(this.page, this.initialPageSize)
      .then(data => {
        this.Customerslist = data;
        this.Customersdata= this.Customerslist.data
        console.log("Result of AllCustomers List", this.Customersdata);
        
      })
      .catch(error => {
        console.log(this.result.Status);
      }
      );
  }
 
  pagination(event:any){
    this.page=event;
    this.AllCustomers()
  }
}
  

