import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor( private http:HttpClient) { }

  SendEmail(Email:any)
  {
    return this.http.post(`${environment.baseUrl}/api/Email`,Email)
  }
  SendEmailCode(Email:any)
  {
    return this.http.post(`${environment.baseUrl}/api/Email/SendEmailCode`,Email)
  }
  
  
}

