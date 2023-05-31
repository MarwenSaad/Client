import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalDismissReasons, NgbConfig, NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { JobSeekerService } from '../Services/job-seeker.service';

@Component({
  selector: 'app-profile-about',
  templateUrl: './profile-about.component.html',
  styleUrls: ['./profile-about.component.css']
})
export class ProfileAboutComponent implements OnInit {
  userconnect=JSON.parse(localStorage.getItem("userconnect")!)
  role=this.userconnect[0].role
  Diploma:any
  Experience:any
  DiplomaForm:FormGroup
  SkillsForm:FormGroup
  ExperienceForm:FormGroup
  closeResult:any
  BankSkills:any
  JobSeekerSkills:any[]
  constructor(config:NgbModalConfig,private JSservices:JobSeekerService ,private builder:FormBuilder,private modalService:NgbModal) {
    config.backdrop = false;
    config.keyboard = true;
   }

  ngOnInit(): void {
    if(this.userconnect !=null&&this.role=="JobSeeker")
    {
      this.GetDiploma()
      this.GetExperience()
      this.GetSkillsByJobSeeker()
    }
    this.DiplomaForm=this.builder.group({
      DiplomaName:['',Validators.required],
      Description:['',Validators.required],
      Country:['',Validators.required],
      GradiatedYear:['',Validators.required],
      JobSeekerId:['',Validators.required]
    })
    this.ExperienceForm=this.builder.group({
      JobSeekerId:['',Validators.required],
      JobTitle:['',Validators.required],
      CompanyName:['',Validators.required],
      Description:['',Validators.required],
      StartDate:['',Validators.required],
      EndDate:['',Validators.required],
    })
    this.SkillsForm=this.builder.group({
      JobSeekerId:['',Validators.required],
      SkillsBankId:['',Validators.required],
      Score:['',Validators.required]
    })
    
  }
  GetDiploma()
  {
    this.JSservices.UserDiploma(this.userconnect[0].jobSeekerId).subscribe((res)=>{
      console.log('diploma',res)
      this.Diploma=res
    })
  }

  AddExperience()
  {
    this.ExperienceForm.patchValue({
      JobSeekerId:this.userconnect[0].jobSeekerId
    })
    this.JSservices.AddExperience(this.ExperienceForm.value).subscribe((res)=>{
      console.log('experience',res)
      this.Experience=res
    })
  }
  GetExperience()
  {
    this.JSservices.GetExperience(this.userconnect[0].jobSeekerId).subscribe((res)=>{
      console.log('experience',res)
      this.Experience=res
      
    })
  }


  AddDiploma()
  {
    this.DiplomaForm.patchValue({
      JobSeekerId:this.userconnect[0].jobSeekerId
    })
    this.JSservices.AddDiploma(this.DiplomaForm.value).subscribe((res)=>{
      console.log(res)
      this.GetDiploma()
    })
  }
  GetAllSkills()
  {
    this.JSservices.GetAllSkills().subscribe((res)=>{
      console.log('allSkills',res)
      this.BankSkills=res
      
    })
  }
  GetSkillsByJobSeeker()
  {
    this.JSservices.GetSkillsByJobSeeker(this.userconnect[0].jobSeekerId).subscribe((res:any)=>{
      this.JobSeekerSkills= res.map((item:any)=>{
       return{"Skills":item[0],"SB":item[1]}});
      console.log('JobSeekerSkills',this.JobSeekerSkills)
    })
  }
  UpdateDiploma()
  {

  }
  AddSkills()
  {
    this.SkillsForm.patchValue({
      JobSeekerId:this.userconnect[0].jobSeekerId,
      Score:0,
    })
    console.log(this.SkillsForm.value)
    this.JSservices.AddSkills(this.SkillsForm.value).subscribe((res)=>{
      console.log('SkillsAdded',res)
    })
  }
  DeleteSkills()
  {

  }
  UpdateSkills()
  {

  }

  DeleteExperience()
  {

  }
  UpdateExperience()
  {
    
  }


  open(content:any) {
    this.GetAllSkills()
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;

    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });

  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
