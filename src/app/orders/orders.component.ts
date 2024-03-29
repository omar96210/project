import { Component, OnInit } from '@angular/core';
import { Service } from '../services/service';
declare var $: any;

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
  collectionSize:any;

  constructor(public Service: Service) { }

  ngOnInit(): void {
    this.Allorders()
  }
  
  Allorders() {

    this.Service.Getorders(this.page, this.initialPageSize)
      .then(data => {

        this.orderslist = data;
        this.ordersdata = this.orderslist.data;
        this.lengthorderslist=this.ordersdata.length;
        this.collectionSize=this.orderslist.size
        console.log("Result of Allorders List", this.ordersdata);
      })
      .catch(error => {
        console.log(this.result.Status);
      }
      );
  }

  openbill(id: any) {
    this.IDbill = id;
    for (let i = 0; i <=this.lengthorderslist-1; i++) {
      if ( this.ordersdata[i].id == this.IDbill) {
        this.tabledata = this.ordersdata[i].products;
        console.log(this.tabledata)
        this.indexbill = i;
      }
    }

  }
  openimage(imageid: any) {
    this.IDimage = imageid;
    this.lengthordersimage=this.ordersdata[this.indexbill].products.length;
    console.log(this.lengthordersimage)
    for (let i = 0; i <=this.lengthordersimage-1; i++) {
      if ( this.ordersdata[this.indexbill].products[i].id == this.IDimage) {
        this.imagedata = this.ordersdata[this.indexbill].products[i].image;
       console.log(this.imagedata)
      }
    }

  }
  pagination(event:any){
    this.page=event;
    this.Allorders()
}
}
