import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http:HttpClient) { }


  JobSeekerSignUp(RegisterModel:any)
  {
    return this.http.post(`${environment.baseUrl}/api/AuthenticationControllers/JobSeekerRegister`,RegisterModel)
  }
  CompanySignUp(RegisterModel:any)
  {
    return this.http.post(`${environment.baseUrl}/api/AuthenticationControllers/CompanyRegister`,RegisterModel)
  }
  LogIn(LoginModel:any)
  {
    return this.http.post(`${environment.baseUrl}/api/AuthenticationControllers/LogIn`,LoginModel)
  }
  ResetPassword(ResetForm:any)
  {
    return this.http.post(`${environment.baseUrl}/api/AuthenticationControllers/ForgetPassword`,ResetForm)
  }
  LogOut(email:any,LogInP:any,token:any)
  {
    return this.http.get(`${environment.baseUrl}/api/AuthenticationControllers/LogOut/${email}/${LogInP}/${token}`)
  }
}
