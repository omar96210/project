import { Component, OnInit } from '@angular/core';
import { Service } from '../services/service';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

  dashboardlist: any;
  dashboarddata: any;
  lengthrecentOrders: any;
  lengthrecentOrderproducts:any;
  tabledata: any;
  result: any;
  IDbill: any;
  IDimage:any;
  imagedata:any;
  constructor(public Service: Service) { }

  ngOnInit(): void {
    this.Alldashboard();
  }

  Alldashboard() {
    this.Service.GetDashboardData()
      .then(data => {
        this.dashboardlist = data;
        this.dashboarddata = this.dashboardlist.recentOrders;
        this.lengthrecentOrders = this.dashboardlist.recentOrders.length;
        console.log("Result of Alldashboard List", this.dashboardlist);
      })
      .catch(error => {
        console.log(this.result.Status);

      }
      );
  }

  openbill(id: any) {
    this.IDbill = id;
    for (let i = 0; i <=this.lengthrecentOrders-1; i++) {
      if ( this.dashboardlist.recentOrders[i].id == this.IDbill) {
        this.tabledata = this.dashboardlist.recentOrders[i].products;
      }
    }

  }
  openimage(imageid: any) {
    this.IDimage = imageid;
    this.lengthrecentOrderproducts=this.dashboardlist.recentOrders[3].products.length;
    for (let i = 0; i <=this.lengthrecentOrderproducts-1; i++) {
      if ( this.dashboardlist.recentOrders[this.IDbill].products[i].id == this.IDimage) {
        this.imagedata = this.dashboardlist.recentOrders[this.IDimage].products[i].image;
       
      }
    }

  }
}
