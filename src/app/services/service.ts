import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch'
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';



@Injectable()
export class Service {

    apiUrl: any;
    token2 = "ThisIsTheSwaggerToken ";


    private headers = new Headers({ 'Content-Type': 'application/json' });

    constructor(private http: HttpClient,private router: Router) {
        this.http = http;
        // https://www.appweb.website/100top/api/dashboard
        this.apiUrl = 'https://www.appweb.website/100top/api/';
    }


    GetDashboardData() {
        const headers = new Headers();
        headers.append('Content-Type','application/json');
        headers.append('token', this.token2);
        return new Promise((resolve, reject) => {
            this.http
                .get(this.apiUrl+ 'dashboard' )
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




}
