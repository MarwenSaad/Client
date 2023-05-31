import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PublicServicesService {

  constructor(private http:HttpClient) { }
  GetAllJobs()
  {
    return this.http.get(`${environment.baseUrl}/api/Jobs`)
  }
  GetAllCompany()
  {
    return this.http.get(`${environment.baseUrl}/api/Companies`)
  }
  GetAllJobSeeker()
  {
    return this.http.get(`${environment.baseUrl}/api/JobSeekers`)
  }
  ApplyToJob(Application:any)
  {
    return this.http.post(`${environment.baseUrl}/api/JobApplications`,Application)
  }
  GetCompanyById(Id:any)
  {
    return this.http.get(`${environment.baseUrl}/api/Companies/${Id}`)
  }
  SpontaniousApplication(Application:any)
  {
    return this.http.post(`${environment.baseUrl}/api/SpontaniousApplications`,Application)
  }
  GetJobSeekerById(Id:any)
  {
    return this.http.get(`${environment.baseUrl}/api/JobSeekers/${Id}`)
  }
}
