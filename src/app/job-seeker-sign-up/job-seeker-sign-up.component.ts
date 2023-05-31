import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthenticationService } from '../Services/authentication.service';

@Component({
  selector: 'app-job-seeker-sign-up',
  templateUrl: './job-seeker-sign-up.component.html',
  styleUrls: ['./job-seeker-sign-up.component.css']
})
export class JobSeekerSignUpComponent implements OnInit {
  SignUpForm:FormGroup 
  LogInForm:FormGroup
  picture:any
  constructor(private builder:FormBuilder,private JSservices:AuthenticationService,private route:Router) { }

  ngOnInit(): void {
    this.SignUpForm=this.builder.group({
      UserName:['',Validators.required],
      FirstName:['',Validators.required],
      LastName:['',Validators.required],
      Email:['',Validators.required],
      Password:['',Validators.required],
      Phone:['',Validators.required],
      FullAddress:['',Validators.required],
      Picture:['',Validators.required],
      JobTitle:['',Validators.required],
      Role:['',Validators.required]
    })
    this.LogInForm=this.builder.group({
      Email:['',Validators.required],
      Password:['',Validators.required]
    })
  }
    handleUpload(event:any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
        this.picture=reader.result
        console.log(this.picture)
    };
}
JSSignUp()
{
  console.log(this.picture)
  this.SignUpForm.patchValue({
    
    Picture:this.picture,
    Role:"String"
  })
  this.JSservices.JobSeekerSignUp(this.SignUpForm.value).subscribe((res:any)=>{
    console.log('res',res);

    this.LogInForm.patchValue({
      Email:this.SignUpForm.controls['Email'].value,
      Password:this.SignUpForm.controls["Password"].value
    })
    this.JSservices.LogIn(this.LogInForm.value).subscribe((res:any)=>{
      localStorage.setItem('token',res.token)   
      localStorage.setItem('userconnect',JSON.stringify(res.logInfo))
      window.location.href='/Profile/ProfileContenent'
    })
  })
}

}
