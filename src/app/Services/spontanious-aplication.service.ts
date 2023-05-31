import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SpontaniousAplicationService {

  constructor(private http:HttpClient) { }

  GetSpontaniousByJobSeeker(jobSeekerId:any)
  {
    return this.http.get(`${environment.baseUrl}/api/SpontaniousApplications/JobSeeker/${jobSeekerId}`)
  }
  GetSpontaniousByCompany(companyId:any)
  {
    return this.http.get(`${environment.baseUrl}/api/SpontaniousApplications/Company/${companyId}`)
  }
  DeleteSpontaniousApplication(id:any)
  {
    return this.http.delete(`${environment.baseUrl}/api/SpontaniousApplications/${id}`)
  }
  UpdateSpontaniousApplication(Id:any,Form:any)
  {
    return this.http.put(`${environment.baseUrl}/api/SpontaniousApplications/${Id}`,Form)
  }
}
