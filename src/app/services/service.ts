import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch'
import 'rxjs/Rx';



@Injectable()
export class Service {

    apiUrl: any;
    token2 = "ThisIsTheSwaggerToken ";


    private headers = new Headers({ 'Content-Type': 'application/json' });

    constructor(private http: HttpClient, private router: Router) {
        this.http = http;
        //https://www.appweb.website/100top/api/dashboard
        //https://www.appweb.website/100top/api/dashboard/products?size=5&number=1
        //https://www.appweb.website/100top/api/dashboard/categories?size=5&number=1
        //https://www.appweb.website/100top/api/dashboard/orders?size=5&number=1
        //https://www.appweb.website/100top/api/dashboard/users?size=5&number=1
        //https://www.appweb.website/100top/api/dashboard/add-product?name=fsfsddsg&desc=sdsgdfjhsfdh&image&category_id=1&seller_id=1&order_count=1&price=350&rate=4&discount=22
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
    

    
    AddProduct(name: any, desc: any,image:any,price:any,discount:any)  {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('token', this.token2);

        return this.http.post(this.apiUrl + 'dashboard/add-product?name='+name+'&desc='+desc+'&image='+image+'&category_id=1&seller_id=1&order_count=1&price='+price+'&rate=4&discount='+discount,
            { headers: headers })
    }

    AddCatagory(name: any,image:any)  {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('token', this.token2);

        return this.http.post(this.apiUrl + 'dashboard/add-category?name='+name+'&image='+image,
            { headers: headers })
    }


   

}
