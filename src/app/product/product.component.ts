import { Component, OnInit } from '@angular/core';
import { Service } from '../services/service';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
declare var $: any;

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public editform!: FormGroup;
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
  selectedFile: any;
  IDproduct: any;
  Categorylist: any;
  Categorydata: any;
  Catagoryaddid: any;
  lengthCategorydata: any;
  productidedit: any;
  collectionSize=200;

  constructor(
    private fb: FormBuilder,
    public Service: Service) { }

  ngOnInit() {
    this.Allproduct()
    this.AllCategory()
    this.editform = this.fb.group({
      editName: [null, null],
      editdescr: [null, null],
      editprice: [null, null],
      editdisco: [null, null],
    });
    this.form = this.fb.group({
      Name: [null, null],
      descr: [null, null],
      price: [null, null],
      disco: [null, null],
    });
  }

  Allproduct() {
    $("#Loading3").modal("show")

    this.Service.Getproduct(this.page, this.initialPageSize)
      .then(data => {
        $("#Loading3").modal("hide")
        this.productlist = data;
        this.productdata = this.productlist.data
        this.lengthProductlist = this.productdata.length;
        // this.collectionSize = this.productlist.length;
        console.log(this.collectionSize)
        console.log("Result of Allproduct List", this.productdata);
      })
      .catch(error => {
        $("#Loading3").modal("hide")
        console.log(this.result.Status);
      }
      );
  }
  AllCategory() {
    this.Service.GetCategory(this.page, 200)
      .then(data => {
        this.Categorylist = data;
        this.Categorydata = this.Categorylist.data
        this.lengthCategorydata = this.Categorydata.length;
        console.log("Result of AllCategory List", this.Categorydata);
      })
      .catch(error => {
        console.log(this.result.Status);
      }
      );

  }

  openimage(imageid: any) {
    this.IDimage = imageid;
    for (let i = 0; i <= this.lengthProductlist - 1; i++) {
      if (this.productdata[i].id == this.IDimage) {
        this.imagedata = this.productdata[i].image;

      }
    }
  }

  onFileSelected(event: any) {
    this.selectedFile = <File>event.target.files[0];
  }
  getCatagoryaddid(event: any) {
    this.Catagoryaddid = event.target.selectedIndex - 1
    this.Catagoryaddid = this.Categorydata[this.Catagoryaddid].id;
    console.log(this.Catagoryaddid)
    this.Catagoryaddid.toString()
  }
  AddProductform() {
    $("#Loading3").modal("show")

    this.NameForm = this.form.value.Name;
    this.descrForm = this.form.value.descr;
    this.priceForm = this.form.value.price;
    this.discoForm = this.form.value.disco;

    this.Service.AddProduct(this.NameForm, this.descrForm, this.selectedFile, this.priceForm, this.discoForm, this.Catagoryaddid).subscribe(
      data => {
        this.result = data;
        console.log('this.result', this.result);
        $("#Loading3").modal("hide")
        $("#Addproduct").modal("hide")
        this.Allproduct();
      },
      err => {
        window.alert("لم يتم الاضافة");

      });

      this.form = this.fb.group({
        Name: [null, null],
        descr: [null, null],
        price: [null, null],
        disco: [null, null],
      });

 
      
  }

  // updateMove(id, packag, packagnumbe, money, MinimumCamel, MaximumCamel, MinimumCompetitor, MaximumCompetitor, packagrole) {
  //   this.pakageId = id;
  //   this.packagnameedit = packag;
  //   this.packagnumberedit = packagnumbe;
  //   this.moneyedit = money;
  //   this.MinimumCamelsCountedit = MinimumCamel;
  //   this.MaximumCamelsCountedit = MaximumCamel;
  //   this.MinimumCompetitorsCountedit = MinimumCompetitor;
  //   this.MaximumCompetitorsCountedit = MaximumCompetitor;
  //   this.packagroleedit = packagrole;

  //   this.formupdate.controls['packagname'].setValue(this.packagnameedit);
  //   this.formupdate.controls['packagnumber'].setValue(this.packagnumberedit);
  //   this.formupdate.controls['money'].setValue(this.moneyedit);
  //   this.formupdate.controls['MinimumCamelsCount'].setValue(this.MinimumCamelsCountedit);
  //   this.formupdate.controls['MaximumCamelsCount'].setValue(this.MaximumCamelsCountedit);
  //   this.formupdate.controls['MinimumCompetitorsCount'].setValue(this.MinimumCompetitorsCountedit);
  //   this.formupdate.controls['MaximumCompetitorsCount'].setValue(this.MaximumCompetitorsCountedit);
  //   this.formupdate.controls['packagrole'].setValue(this.packagroleedit);
  // }  (product.id,product.name,product.desc,product.price,product.discount,product.image)
  productname: any;
  productdesc: any;
  productprice: any;
  productdiscount: any;
  productimage: any;

  getproductid(id: any, name: any, desc: any, price: any, discount: any, image: any) {
    this.productidedit = id;
    this.productname = name;
    this.productdesc = desc;
    this.productprice = price;
    this.productdiscount = discount;
    this.productimage = image;

    this.editform.controls['editName'].setValue(this.productname);
    this.editform.controls['editdescr'].setValue(this.productdesc);
    this.editform.controls['editprice'].setValue(this.productprice);
    this.editform.controls['editdisco'].setValue(this.productdiscount);

  }
  order_count:any=5;
  rate:any=4;
  seller_id:any=1;
  editProductform() {
    $("#Loading3").modal("show")

    this.NameForm = this.editform.value.editName;
    this.descrForm = this.editform.value.editdescr;
    this.priceForm = this.editform.value.editprice;
    this.discoForm = this.editform.value.editdisco;

    let formDataeditProduct:FormData = new FormData();
    formDataeditProduct.append('id',this.productidedit);
    formDataeditProduct.append('category_id',this.Catagoryaddid);
    formDataeditProduct.append('desc', this.descrForm);
    formDataeditProduct.append('discount', this.discoForm);
    formDataeditProduct.append('image_file', this.selectedFile);
    formDataeditProduct.append('name', this.NameForm);
    formDataeditProduct.append('order_count',this.order_count);
    formDataeditProduct.append('rate',this.rate);
    formDataeditProduct.append('seller_id',this.seller_id);
    formDataeditProduct.append('price', this.priceForm);


    this.Service.editProduct(formDataeditProduct).subscribe(
      data => {
        this.result = data;
    
     

      },
      err => {
        $("#Loading3").modal("hide")
        $("#Editproduct").modal("hide")
        this.Allproduct();
      });
      

  }

  getId(ID: any) {
    this.IDproduct = ID;
  }
  deletproductform() {
    $("#Loading3").modal("show")
    console.log(this.IDproduct);
    this.Service.deleteProduct(this.IDproduct).subscribe(
      data => {
        this.result = data;

      },
      err => {
        $("#Loading3").modal("hide")
        $("#Deleteproduct").modal("hide")
        this.Allproduct();
      });


  }
  pagination(event: any) {
    this.page = event;
    this.Allproduct()
  }

}
