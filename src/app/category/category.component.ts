import { Component, OnInit } from '@angular/core';
import { Service } from '../services/service';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  public form!: FormGroup;

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
  Api = "https://www.appweb.website/100top/api/dashboard/uploads/"

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
  }


  AllCategory() {
    this.Service.GetCategory(this.page, this.initialPageSize)
      .then(data => {
        this.Categorylist = data;
        this.lengthCategorylist = this.Categorylist.length;
        
        console.log("Result of AllCategory List", this.Categorylist);
      })
      .catch(error => {
        console.log(this.result.Status);
      }
      );
  }

  openimage(imageid: any) {
    this.IDimage = imageid;
    for (let i = 0; i <= this.lengthCategorylist - 1; i++) {
      if (this.Categorylist[i].id == this.IDimage) {
        this.imagedata = this.Categorylist[i].image;
        console.log(this.imagedata)
        this.imagedata= this.Api +this.imagedata
        console.log(this.imagedata)
      }
    }
  }
  onFileSelected(event: any) {
    this.selectedFile = <File>event.target.files[0];
  }
  AddCategoryform() {
    this.onUploadfile();
    this.NameForm = this.form.value.Name;
    console.log("name", this.NameForm)
    console.log("name", this.newImageName)

    this.Service.AddCatagory(this.NameForm, this.selectedFile).subscribe(
      data => {
        this.result = data;
        console.log('this.result', this.result);
        if (this.result.Success == true) {
          this.AllCategory();

        }
        else if (this.result.Success == false) {
        }
      },
      err => {

      });
  }
  onUploadfile() {
    this.uploadFile().then(
      data => {
        this.uploadlist = data;
        this.uploaddata = this.uploadlist.Data;
        this.newImageName1 = this.uploaddata[0].NewFileName;
        console.log('this.list', this.uploadlist.Data.NewFileName);
        this.newImageName = "https://www.appweb.website/100top/api/dashboard/uploads/" + this.newImageName1;
        console.log(' this.newImageName', this.newImageName);

      })
  }

  uploadFile() {
    const fd = new FormData();
    fd.append('Image', this.selectedFile, this.selectedFile.name)
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return new Promise((resolve, reject) => {
      return this.http.post('https://www.appweb.website/100top/api/dashboard/uploads/', fd)
        .subscribe(
          data => {
            resolve(data);
          },
          error => {
            reject(error);
          });
    })
  }
  collectionSize=200;
  pagination(event:any){
    this.page=event;
    this.AllCategory()
}
}
