import { Component, OnInit } from '@angular/core';
import { Service } from '../services/service';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
declare var $: any;

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  public form!: FormGroup;
  public editform!: FormGroup;

  
  page = 1;
  Categorylist: any;
  Categorydata: any;
  initialPageSize = 10;
  result: any;
  IDimage: any;
  lengthCategorylist: any;
  imagedata: any;
  NameForm: any;
  newImageNameForm: any;
  selectedFile: any;
  uploadlist: any;
  uploaddata: any;
  newImageName1: any;
  newImageName: any;
  IDCategory:any
  editCategoryId: any;
  editselectedFile: any;
  editNameForm: any;
  constructor(
    private fb: FormBuilder,
    public Service: Service,
    private http: HttpClient
  ) { }
  ngOnInit() {
    this.AllCategory()
    this.form = this.fb.group({
      Name: [null, null],
    });
    this.editform = this.fb.group({
      editName: [null, null],
    });
  }


  AllCategory() {
    this.Service.GetCategory(this.page, this.initialPageSize)
      .then(data => {
        this.Categorylist = data;
        this.lengthCategorylist = this.Categorylist.data.length;
        this.Categorydata=this.Categorylist.data
        console.log("Result of AllCategory List", this.Categorydata);
      })
      .catch(error => {
        console.log(this.result.Status);
      }
      );
  }

  openimage(imageid: any) {
    this.IDimage = imageid;
    for (let i = 0; i <= this.lengthCategorylist - 1; i++) {
      if (this.Categorydata[i].id == this.IDimage) {
        this.imagedata = this.Categorydata[i].image;
        console.log(this.imagedata)
        this.imagedata=this.imagedata
        console.log(this.imagedata)
      }
    }
  }
  onFileSelected(event: any) {
    this.selectedFile = <File>event.target.files[0];
  }
  AddCategoryform() {
    this.NameForm = this.form.value.Name;
    this.Service.AddCatagory(this.NameForm, this.selectedFile).subscribe(
      data => {
        this.result = data;
      },
      err => {
      });
      $("#AddCategory").modal("hide")
      this.form = this.fb.group({
        Name: [null, null],
      });
      console.log('this.result', this.result);
      this.AllCategory();
  }
  editgetId(Id:any){
    this.editCategoryId=Id;
    console.log("1",this.editCategoryId)
  }
  editonFileSelected(event: any) {
    this.editselectedFile = <File>event.target.files[0];
    console.log("2",this.editselectedFile)

  }
  editCategoryform() {
    this.editNameForm = this.editform.value.editName;
    this.Service.editCatagory( this.editCategoryId, this.editNameForm, this.editselectedFile).subscribe(
      data => {
        this.result = data;
      },
      err => {
      });
      $("#editCategory").modal("hide")
      console.log('this.result', this.result);
      this.AllCategory();
  }



  getId(ID: any){
    this.IDCategory=ID;
  }
  deletCategoryform() {
    console.log(this.IDCategory);
    this.Service.deleteCatagory(this.IDCategory).subscribe(
      data => {
        this.result = data;
        this.AllCategory();      },
      err => {

      });
      $("#DeleteCategory").modal("hide")
      console.log('this.result', this.result);
      this.AllCategory();

  }
  
  collectionSize=200;
  pagination(event:any){
    this.page=event;
    this.AllCategory()
}
}
