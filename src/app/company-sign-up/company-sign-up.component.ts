import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthenticationService } from '../Services/authentication.service';

@Component({
  selector: 'app-company-sign-up',
  templateUrl: './company-sign-up.component.html',
  styleUrls: ['./company-sign-up.component.css']
})
export class CompanySignUpComponent implements OnInit {
SignUpForm:FormGroup
LogInForm:FormGroup
picture:any
constructor(private builder:FormBuilder,private Auth:AuthenticationService,private route:Router) { }

ngOnInit(): void {
  this.SignUpForm=this.builder.group({
    CompanyName:['',Validators.required],
    ActivityFiled:['',Validators.required],
    Location:['',Validators.required],
    Description:['',Validators.required],
    Email:['',Validators.required],
    Password:['',Validators.required],
    Phone:['',Validators.required],
    Role:['',Validators.required],
    Picture:['',Validators.required]
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
CompanySignUp()
{
this.SignUpForm.patchValue({
  Role:"String",
  Picture:this.picture
})

this.Auth.CompanySignUp(this.SignUpForm.value).subscribe((res:any)=>{
  console.log('res',res);
  Swal.fire("Company created successfully")
  

  this.LogInForm.patchValue({
    Email:this.SignUpForm.controls['Email'].value,
    Password:this.SignUpForm.controls["Password"].value
  })
  this.Auth.LogIn(this.LogInForm.value).subscribe((res:any)=>{
    localStorage.setItem('token',res.token)   
    localStorage.setItem('userconnect',JSON.stringify(res.logInfo))
    window.location.href='/Profile/ProfileContenent'
  })
  
})
}

}
