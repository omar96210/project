import { Component, OnInit } from '@angular/core';
import { Service } from '../services/service';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public form!: FormGroup;

  page = 1;
  productlist: any;
  productdata: any;
  initialPageSize = 10;
  result: any;
  IDimage: any;
  lengthProductlist: any;
  imagedata: any;
  NameForm: any;
  descrForm: any;
  priceForm: any;
  discoForm: any;
  newImageNameForm: any;

  constructor(
    private fb: FormBuilder,
    public Service: Service) { }

  ngOnInit() {
    this.Allproduct()

    this.form = this.fb.group({
      Name: [null, null],
      descr: [null, null],
      price: [null, null],
      disco: [null, null],
      newImageName:[null, null],
    });
  }
  
  Allproduct() {
    this.Service.Getproduct(this.page, this.initialPageSize)
      .then(data => {
        this.productlist = data;
        this.lengthProductlist=this.productlist.length;
        console.log("Result of Allproduct List", this.productlist);
      })
      .catch(error => {
        console.log(this.result.Status);
      }
      );
  }
  
  openimage(imageid: any) {
    this.IDimage = imageid;
    for (let i = 0; i <=this.lengthProductlist-1; i++) {
      if ( this.productlist[i].id == this.IDimage) {
        this.imagedata = this.productlist[i].image;
       
      }
    }
  }


  AddProductform() {
         this.NameForm=this.form.value.Name;
         this.descrForm=this.form.value.descr;
         this.newImageNameForm=this.form.value.newImageName;
         this.priceForm=this.form.value.price;
         this.discoForm=this.form.value.disco;
    console.log(this.newImageNameForm)

        this.Service.AddProduct(this.NameForm,this.descrForm, this.newImageNameForm,this.priceForm,this.discoForm).subscribe(
          data => {
            this.result = data;
            console.log('this.result', this.result);
            if (this.result.Success == true) {
              this.Allproduct();
         
            }
            else if (this.result.Success == false) {
            }
          },
          err => {
            
             });
  }

  collectionSize=200;
  pagination(event:any){
    this.page=event;
    this.Allproduct()
}

}
