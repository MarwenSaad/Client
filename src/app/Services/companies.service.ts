import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {
  constructor(private http:HttpClient) { }

  PostJob(Job:any)
  {
    return this.http.post(`${environment.baseUrl}/api/Jobs`,Job)
  }
  GetCompanyJob(CompanyId:any)
  {
    return this.http.get(`${environment.baseUrl}/api/Jobs/GetJobsByCompany/${CompanyId}`)
  }
  GetSubCatigorie()
  {
    return this.http.get(`${environment.baseUrl}/api/JobSubcatigories`)
  }
  GetJobById(Id:any)
  {
    return this.http.get(`${environment.baseUrl}/api/Jobs/${Id}`)
  }
  GetJobApllications(jobId:any)
  {
    return this.http.get(`${environment.baseUrl}/api/JobApplications/Applications/${jobId}`)
  }
  UpdateJobApplication(JobSeekerId:any,JobId:any,Application:any)
  {
    return this.http.put(`${environment.baseUrl}/api/JobApplications/${JobSeekerId}/${JobId}`,Application)
  }
  DeleteApplication(JobSeekerId:any,JobId:any)
  {
    return this.http.delete(`${environment.baseUrl}/api/JobApplications/${JobSeekerId}/${JobId}`)
  }
  GetEventsByCompany(CompanyId:any)
  {
    return this.http.get(`${environment.baseUrl}/api/CompanyEvents/Company/${CompanyId}`)
  }
  AddEvent(Events:any)
  {
    return this.http.post(`${environment.baseUrl}/api/CompanyEvents`,Events)
  }
  DeleteEvents(EventsId:any)
  {
    return this.http.delete(`${environment.baseUrl}/api/CompanyEvents/${EventsId}`)
  }
  DeleteJob(jobId:any)
  {
    return this.http.delete(`${environment.baseUrl}/api/Jobs/${jobId}`)
  }
  

}
