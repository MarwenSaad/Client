import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { from } from 'rxjs';
import Swal from 'sweetalert2';
import { AuthenticationService } from '../Services/authentication.service';
import { CompaniesService } from '../Services/companies.service';
import { EmailService } from '../Services/email.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
LoginForm:FormGroup
ResitForm:FormGroup
EmailForm:FormGroup
closeResult:any

  constructor(private Email:EmailService,config:NgbModalConfig,private modalService:NgbModal,private Builder:FormBuilder,private Auth:AuthenticationService,private route:Router) { 
    config.backdrop = false;
    config.keyboard = true;
  }

  ngOnInit(): void {
    this.LoginForm=this.Builder.group({
      Email:['',Validators.required],
      Password:['',Validators.required]
    })
    this.EmailForm=this.Builder.group({
      EmailToId:['',Validators.required],
      EmailToName:['',Validators.required],
      EmailSubject:['',Validators.required],
      EmailBody:['',Validators.required],
      CompanyName:['',Validators.required]
    })
    this.ResitForm=this.Builder.group({
      Email:['',Validators.required],
      Code:['',Validators.required],
      Password:['',Validators.required]
    })
  }

  LogIn()
  {
    this.Auth.LogIn(this.LoginForm.value).subscribe((res:any)=>{
      console.log('res',res);

    localStorage.setItem('token',res.token)   
    localStorage.setItem('userconnect',JSON.stringify(res.logInfo))
    window.location.href='/Profile/ProfileContenent'
    })
  }

  SendCode(content:any)
  {
    this.EmailForm.patchValue({
      EmailToName:"Reset mail",
      EmailSubject:"Resit Password",
      EmailBody:"This is your code please copy and past it into the reset form : "//+Math.random().toString(36).slice(-8)
    })
    console.log(this.EmailForm.value)
    this.Email.SendEmailCode(this.EmailForm.value).subscribe((res)=>{
      console.log(res)
      if(res==true)
      {
        this.modalService.dismissAll('Cross click')
        this.open(content)
      }
    })
  }
  ResitPassword()
  {
    this.Auth.ResetPassword(this.ResitForm.value).subscribe((res)=>{
       console.log(res)
       if(res==null)
       {
        this.modalService.dismissAll('Cross click')
        Swal.fire("successfylly resit")
       }
     })
  }
  open(content:any) {
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
