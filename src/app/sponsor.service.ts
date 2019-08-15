import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SponsorService {
  baseUrl = 'http://192.168.1.106:3000/';
  configUrl = this.baseUrl + 'claimsmanagement/claims/process';

  constructor( private http: HttpClient) { }


  getSponsorid(value): Observable<any> {
    return this.http.post(`${this.configUrl}`, value);
  }

  // getToken(): string {
  //   return localStorage.getItem('token');
  // }
}
