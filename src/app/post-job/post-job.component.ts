import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CompaniesService } from '../Services/companies.service';

@Component({
  selector: 'app-post-job',
  templateUrl: './post-job.component.html',
  styleUrls: ['./post-job.component.css']
})
export class PostJobComponent implements OnInit {
PostJobForm:FormGroup
userconnect=JSON.parse(localStorage.getItem("userconnect")!)
role:any
SubCatigorie:any


  constructor(private builder:FormBuilder,private services:CompaniesService, private route:Router) { }

  ngOnInit(): void {
    this.role=this.userconnect[0].role
    this.GetSubCatigorie()
    this.PostJobForm=this.builder.group({
      JobTitle:['',Validators.required],
      Description:['',Validators.required],
      Salary:['',Validators.required],
      Location:['',Validators.required],
      JobType:['',Validators.required],
      Expiration:['',Validators.required],
      CompanyId:['',Validators.required],
      JobSubCatigorieId:['',Validators.required]
    }) 
  }
  GetSubCatigorie()
  {
    this.services.GetSubCatigorie().subscribe((res)=>{
      this.SubCatigorie=res
      console.log('SubCatigorie',res)
    })
  }
  PostJob()
  {
  
    if(this.role=="Company"&&this.userconnect !=null)
    {
      
      this.PostJobForm.patchValue({
        CompanyId:this.userconnect[0].companyId

      }),
      this.services.PostJob(this.PostJobForm.value).subscribe((res)=>{
        console.log('job',res)
        this.route.navigateByUrl("/Profile/Job")
      })
    }

  }
  
}
