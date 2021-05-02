import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch'
import 'rxjs/Rx';



@Injectable()
export class Service {
    num:any=2;
    apiUrl: any;
    token2 = "ThisIsTheSwaggerToken ";
    order_count:any=5;
    rate:any=4;
    seller_id:any=1;

    private headers = new Headers({ 'Content-Type': 'application/json' });

    constructor(private http: HttpClient, private router: Router) {
        this.http = http;
        //https://www.appweb.website/100top/api/dashboard
        //https://www.appweb.website/100top/api/dashboard/products?size=5&number=1
        //https://www.appweb.website/100top/api/dashboard/categories?size=5&number=1
        //https://www.appweb.website/100top/api/dashboard/orders?size=5&number=1
        //https://www.appweb.website/100top/api/dashboard/users?size=5&number=1
        //https://www.appweb.website/100top/api/dashboard/add-product?name=fsfsddsg&desc=sdsgdfjhsfdh&image&category_id=1&seller_id=1&order_count=1&price=350&rate=4&discount=22
        //https://www.appweb.website/100top/api/dashboard/delete-product?id=12
        this.apiUrl = 'https://www.appweb.website/100top/api/';
    }


    GetDashboardData() {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('token', this.token2);
        return new Promise((resolve, reject) => {
            this.http
                .get(this.apiUrl + 'dashboard')
                .subscribe(
                    data => {
                        resolve(data);
                    },
                    error => {
                        reject(error);
                    }
                );
        });
    }



    GetCustomers(pageindex: number, pagesize: number) {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('token', this.token2);
        return new Promise((resolve, reject) => {
            this.http
                .get(this.apiUrl + 'dashboard/users?size=' + pagesize + '&number=' + pageindex)
                .subscribe(
                    data => {
                        resolve(data);
                    },
                    error => {
                        reject(error);
                    }
                );
        });
    }
    Getproduct(pageindex: number, pagesize: number) {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('token', this.token2);
        return new Promise((resolve, reject) => {
            this.http
                .get(this.apiUrl + 'dashboard/products?size=' + pagesize + '&number=' + pageindex)
                .subscribe(
                    data => {
                        resolve(data);
                    },
                    error => {
                        reject(error);
                    }
                );
        });
    }
    Getorders(pageindex: number, pagesize: number) {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('token', this.token2);
        return new Promise((resolve, reject) => {
            this.http
                .get(this.apiUrl + 'dashboard/orders?size=' + pagesize + '&number=' + pageindex)
                .subscribe(
                    data => {
                        resolve(data);
                    },
                    error => {
                        reject(error);
                    }
                );
        });
    }
    GetCategory(pageindex: number, pagesize: number) {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('token', this.token2);
        return new Promise((resolve, reject) => {
            this.http
                .get(this.apiUrl + 'dashboard/categories?size=' + pagesize + '&number=' + pageindex)
                .subscribe(
                    data => {
                        resolve(data);
                    },
                    error => {
                        reject(error);
                    }
                );
        });
    }
    //https://www.appweb.website/100top/api/dashboard/add-product?name=fsfsddsg&desc=sdsgdfjhsfdh&image&category_id=1&seller_id=1&order_count=1&price=350&rate=4&discount=22
    // AddProduct(name: any, desc: any,price:any,discount:any) {
    //     const headers = new Headers();
    //     headers.append('Content-Type', 'application/json');
    //     headers.append('token', this.token2);
    //     return new Promise((resolve, reject) => {
    //         this.http
    //             .put(this.apiUrl+)
    //             .subscribe(
    //                 data => {
    //                     resolve(data);
    //                 },
    //                 error => {
    //                     reject(error);
    //                 }
    //             );
    //     });
    // }
    

    
    AddProduct(name: any, desc: any,image:any,price:any,discount:any,category_id:any)  {
        // const headers = new Headers();
        // headers.append('Content-Type', 'application/json');
        // headers.append('token', this.token2);
        let formDataAddProduct:FormData = new FormData();
        formDataAddProduct.append('category_id',category_id);
        formDataAddProduct.append('desc', desc);
        formDataAddProduct.append('discount', discount);
        formDataAddProduct.append('image_file', image);
        formDataAddProduct.append('name', name);
        formDataAddProduct.append('order_count',this.order_count);5
        formDataAddProduct.append('rate',this.rate);4
        formDataAddProduct.append('seller_id',this.seller_id);1
        formDataAddProduct.append('price', price);
        return this.http.post(this.apiUrl + 'dashboard/add-product',formDataAddProduct)
    }

    AddCatagory(name: any,image:File)  {
        // const headers = new Headers();
        // headers.append('Content-Type', 'application/json');
        // headers.append('token', this.token2);
        let formData:FormData = new FormData();
        formData.append('image_file', image);
        formData.append('name', name);
        return this.http.post(this.apiUrl + 'dashboard/add-category',formData)
    }
    deleteCatagory(Id:any)  {
        // const headers = new Headers();
        // headers.append('Content-Type', 'application/json');
        // headers.append('token', this.token2);
        return this.http.post(this.apiUrl + 'dashboard/delete-category?id='+Id,Id)
    }
    deleteProduct(Id:any)  {
        // const headers = new Headers();
        // headers.append('Content-Type', 'application/json');
        // headers.append('token', this.token2);
        return this.http.post(this.apiUrl + 'dashboard/delete-product?id='+Id,Id)
    }

    editProduct(id:any,name: any, desc: any,image:any,price:any,discount:any,category_id:any)  {
        // const headers = new Headers();
        // headers.append('Content-Type', 'application/json');
        // headers.append('token', this.token2);
        let formDataeditProduct:FormData = new FormData();
        formDataeditProduct.append('id',id);
        formDataeditProduct.append('category_id',category_id);
        formDataeditProduct.append('desc', desc);
        formDataeditProduct.append('discount', discount);
        formDataeditProduct.append('image_file', image);
        formDataeditProduct.append('name', name);
        formDataeditProduct.append('order_count',this.order_count);5
        formDataeditProduct.append('rate',this.rate);4
        formDataeditProduct.append('seller_id',this.seller_id);1
        formDataeditProduct.append('price', price);
        return this.http.post(this.apiUrl + 'dashboard/edit-product',formDataeditProduct)
    }

    editCatagory(id:any,name: any,image:File)  {
        // const headers = new Headers();
        // headers.append('Content-Type', 'application/json');
        // headers.append('token', this.token2);
        let formDataeditCatagory:FormData = new FormData();
        formDataeditCatagory.append('id', id);
        formDataeditCatagory.append('name', name);
        formDataeditCatagory.append('image_file', image);
        return this.http.post(this.apiUrl + 'dashboard/edit-category',formDataeditCatagory)
    }
}
