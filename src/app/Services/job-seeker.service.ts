import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class JobSeekerService {

  constructor(private http:HttpClient) { }
  
  UserDiploma(Id:any)
  {
    return this.http.get(`${environment.baseUrl}/api/Diploma/UserDiploma/${Id}`)
  }
  AddDiploma(Diploma:any)
  {
    return this.http.post(`${environment.baseUrl}/api/Diploma`,Diploma)
  }
  AddSkills(Skills:any)
  {
    return this.http.post(`${environment.baseUrl}/api/JobSeekerSkills`,Skills)
  }
  GetExperience(JobSeekerId:any)
  {
    return this.http.get(`${environment.baseUrl}/api/JobSeekerExperiences/ByJobSeekerId/${JobSeekerId}`)
  }
  AddExperience(Experience:any)
  {
    return this.http.post(`${environment.baseUrl}/api/JobSeekerExperiences`,Experience)
  }
  GetApplicationList(JobSeekerId:any)
  {
    return this.http.get(`${environment.baseUrl}/api/JobApplications/Applications/JobSeeker/${JobSeekerId}`)
  }
  GetAllSkills()
  {
    return this.http.get(`${environment.baseUrl}/api/SkillsBanks`)
  }
  GetSkillsByJobSeeker(JobSeekerId:any)
  {
    return this.http.get(`${environment.baseUrl}/api/JobSeekerSkills/JobSeeker/${JobSeekerId}`)
  }
}
