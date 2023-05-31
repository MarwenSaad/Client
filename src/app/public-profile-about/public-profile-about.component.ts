import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobSeekerService } from '../Services/job-seeker.service';
import { PublicServicesService } from '../Services/public-services.service';

@Component({
  selector: 'app-public-profile-about',
  templateUrl: './public-profile-about.component.html',
  styleUrls: ['./public-profile-about.component.css']
})
export class PublicProfileAboutComponent implements OnInit {
  Id=this.Activeroute.parent?.snapshot.params['Id']
  role=this.Activeroute.parent?.snapshot.params['Role']
  Diploma:any
  Experience:any
  Company:any
  Skills:any []

  constructor(private Activeroute:ActivatedRoute,private jobSeeker:JobSeekerService,private services:PublicServicesService ) { }

  ngOnInit(): void {
    this.GetAbout()
    console.log(this.role)
    console.log(this.Id)
  }
  GetAbout()
  {
    if(this.role=='JobSeeker')
    {
      this.jobSeeker.UserDiploma(this.Id).subscribe((res)=>{
        this.Diploma=res
        console.log('Diploma',res)
      })
      this.jobSeeker.GetExperience(this.Id).subscribe((res)=>{
        this.Experience=res
        console.log(this.Experience)
      })
      this.jobSeeker.GetSkillsByJobSeeker(this.Id).subscribe((res:any)=>{
        this.Skills=res.map((item:any)=>{return{"JSS":item[0],"SB":item[1]}})
        console.log(this.Skills)
      })
    }
    if(this.role=='Company')
    {
      this.services.GetCompanyById(this.Id).subscribe((res:any)=>{
        this.Company=res
        console.log('Company',res)
      })
    }

  }

}
