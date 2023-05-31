import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ModalDismissReasons, NgbModal,NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { NgbModalBackdrop } from '@ng-bootstrap/ng-bootstrap/modal/modal-backdrop';
import Swal from 'sweetalert2';
import { CompaniesService } from '../Services/companies.service';
import { EmailService } from '../Services/email.service';
import { SpontaniousAplicationService } from '../Services/spontanious-aplication.service';


@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.css']
})
export class JobDetailComponent implements OnInit {
  Id = this.Activeroute.snapshot.params['Id']
  Job: any
  ApplicationsList: any[]
  userconnect = JSON.parse(localStorage.getItem("userconnect")!)
  AcceptForm:FormGroup
  EmailForm:FormGroup
  closeResult:any
  IsReceivedJobSeekerId:any
  IsReceivedJobId:any
  constructor(private EmailServices:EmailService,config:NgbModalConfig,private modalService:NgbModal,private builder:FormBuilder,private Activeroute: ActivatedRoute, private services: CompaniesService) {
    config.backdrop = false;
    config.keyboard = true;
   }

  ngOnInit(): void {
    this.GetJobById()
    this.GetApplications()
    this.AcceptForm=this.builder.group({

      CoverLettre:['',Validators.required],
      JobSeekerId:['',Validators.required],
      JobId:['',Validators.required],
      IsReceived:['',Validators.required],
      IsAccepted:['',Validators.required],
      ApplicationDate:['',Validators.required],
    })
    this.EmailForm=this.builder.group({
      EmailToId:['',Validators.required],
      EmailToName:['',Validators.required],
      EmailSubject:['',Validators.required],
      EmailBody:['',Validators.required],
      CompanyName:['',Validators.required]

    })
  }
  GetJobById() {
    this.services.GetJobById(this.Id).subscribe((res) => {
      this.Job = res
    })
  }
  GetApplications() {
    this.services.GetJobApllications(this.Id).subscribe((res: any) => {
    //  this.ApplicationsList = res

      this.ApplicationsList=res.applicationList.map((item: any) => {
        return{"Condidature":item[0],"Condidate":item[1]}
      })
      console.log(this.ApplicationsList)
    })
  }

  GoToProfile(P:any)
  {
    console.log(P)
    window.location.href="/PublicProfile/"+P.jobSeekerId+"/"+P.role
  }
  Delete(Application:any)
  {
    this.services.DeleteApplication(Application.jobSeekerId,Application.jobId).subscribe((res)=>{
      console.log(res)
      this.GetJobById()
    })
  }

  Accept(Application:any)
  {
    console.log(Application)
    console.log(Application.jobId)
    this.AcceptForm.patchValue({

      JobSeekerId:Application.jobSeekerId,
      JobId:Application.jobId.value,
      CoverLetter:Application.coverLetter,
      IsAccepted:true,
      IsReceived:false,
      ApplicationDate:Application.applicationDate,
    })
    this.services.UpdateJobApplication(Application.jobSeekerId,Application.jobId,this.AcceptForm.value).subscribe((res)=>{
      console.log(res)
      this.GetJobById()
      this.GetApplications()
    })
    

  }


  open(content:any,Condidate:any,Condidature:any) {
    this.EmailForm.patchValue({
      EmailToId:Condidate.email,
      EmailToName:Condidate.firstName,
    })
    this.AcceptForm.patchValue({

      JobSeekerId:Condidature.jobSeekerId,
      JobId:Condidature.jobId,
      CoverLetter:Condidature.coverLetter,
      IsAccepted:true,
      IsReceived:true,
      ApplicationDate:Condidature.applicationDate,
    })
    this.IsReceivedJobId=Condidature.jobId
    this.IsReceivedJobSeekerId=Condidature.jobSeekerId
    console.log(this.AcceptForm.value)
    console.log('IsReceived',this.AcceptForm)
    console.log(this.EmailForm.value)
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

  SendEmail()
  {
    
    this.EmailForm.patchValue({
      EmailSubject:this.Job.job.jobTitle,
      CompanyName:this.Job.company.companyName
    })
    console.log(this.EmailForm.value)
   this.EmailServices.SendEmail(this.EmailForm.value).subscribe((res=>{
    console.log(res)

    if(res==true)
    {
      this.services.UpdateJobApplication(this.IsReceivedJobSeekerId,this.IsReceivedJobId,this.AcceptForm.value).subscribe((res)=>{
        console.log(res)
        this.GetApplications()
      })
    }
    if(res==false)
    {
      console.log('email not sent')
    }
    
   }))
   
  }
  DeleteJob(JobId:any)
  {
    this.services.DeleteJob(JobId).subscribe((res)=>{
      console.log(res)
    })
  }
}
