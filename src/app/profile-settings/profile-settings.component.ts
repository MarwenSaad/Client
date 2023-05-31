import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JobSeekerService } from '../Services/job-seeker.service';

@Component({
  selector: 'app-profile-settings',
  templateUrl: './profile-settings.component.html',
  styleUrls: ['./profile-settings.component.css']
})
export class ProfileSettingsComponent implements OnInit {
  userconnect=JSON.parse(localStorage.getItem('userconnect')!)
  DiplomaForm:FormGroup
  constructor(private builder:FormBuilder, private services:JobSeekerService) { }

  ngOnInit(): void {
    this.DiplomaForm=this.builder.group({
      DiplomaName:['',Validators.required],
      Description:['',Validators.required],
      Country:['',Validators.required],
      GradiatedYear:['',Validators.required],
      JobSeekerId:['',Validators.required]
    })
  }

  AddDiploma()
  {
    this.DiplomaForm.patchValue({
      JobSeekerId:this.userconnect[0].jobSeekerId
    })
    this.services.AddDiploma(this.DiplomaForm).subscribe((res)=>{
      console.log(res)
    })
  }
  DeleteDiploma()
  {

  }
  UpdateDiploma()
  {

  }
  AddSkills()
  {

  }
  DeleteSkills()
  {

  }
  UpdateSkills()
  {

  }
  AddExperience()
  {

  }
  DeleteExperience()
  {

  }
  UpdateExperience()
  {
    
  }

}
