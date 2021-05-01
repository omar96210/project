import { Component, OnInit } from '@angular/core';
import { Service } from '../services/service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  page = 1;
  orderslist: any;
  ordersdata: any;
  initialPageSize = 10;
  result: any;
  IDimage: any;
  lengthorderslist: any;
  imagedata: any;
  IDbill: any;
  tabledata: any;
  lengthordersimage: any;
  indexbill: any;
  constructor(public Service: Service) { }

  ngOnInit(): void {
    this.Allorders()
  }
  
  Allorders() {
    this.Service.Getorders(this.page, this.initialPageSize)
      .then(data => {
        this.orderslist = data;
        this.ordersdata = this.orderslist.recentOrders;
        this.lengthorderslist=this.orderslist.length;
        console.log("Result of Allorders List", this.orderslist);
      })
      .catch(error => {
        console.log(this.result.Status);
      }
      );
  }

  openbill(id: any) {
    this.IDbill = id;
    for (let i = 0; i <=this.lengthorderslist-1; i++) {
      if ( this.orderslist[i].id == this.IDbill) {
        this.tabledata = this.orderslist[i].products;
        console.log(this.tabledata)
        this.indexbill = i;
      }
    }

  }
  openimage(imageid: any) {
    this.IDimage = imageid;
    this.lengthordersimage=this.orderslist[this.indexbill].products.length;
    console.log(this.lengthordersimage)
    for (let i = 0; i <=this.lengthordersimage-1; i++) {
      if ( this.orderslist[this.indexbill].products[i].id == this.IDimage) {
        this.imagedata = this.orderslist[this.indexbill].products[i].image;
       console.log(this.imagedata)
      }
    }

  }
  collectionSize=200;
  pagination(event:any){
    this.page=event;
    this.Allorders()
}
}
