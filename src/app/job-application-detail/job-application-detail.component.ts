import { JsonpClientBackend } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ModalDismissReasons,NgbModal,NgbAccordionConfig, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { CompaniesService } from '../Services/companies.service';
import { FeedBackService } from '../Services/feed-back.service';
import { PublicServicesService } from '../Services/public-services.service';

@Component({
  selector: 'app-job-application-detail',
  templateUrl: './job-application-detail.component.html',
  styleUrls: ['./job-application-detail.component.css']
})
export class JobApplicationDetailComponent implements OnInit {
  Id=this.Activeroute.snapshot.params['Id']
  job:any
  feedBacks:any[]
  userconnect=JSON.parse(localStorage.getItem('userconnect')!) 
  ApplyForm:FormGroup
  FeedBackForm:FormGroup
  closeResult:any
  constructor(private feedBack:FeedBackService,config:NgbModalConfig,private modalService:NgbModal,private builder:FormBuilder,private services:CompaniesService,private Activeroute:ActivatedRoute ,private PublicServices:PublicServicesService) {
    config.backdrop = false;
    config.keyboard = true;
   }

  ngOnInit(): void {
    this.GetFeedBackByJobs()
    this.GetJobById()
    this.ApplyForm=this.builder.group({
      JobSeekerId:['',Validators.required],
      JobId:['',Validators.required],
      CoverLetter:['',Validators.required],
      ApplicationDate:['',Validators.required]
    })
    this.FeedBackForm=this.builder.group({
      FeedbackMessage:['',Validators.required],
      JobId:['',Validators.required],
      JobSeekerId:['',Validators.required],
    })
  }
  GetJobById()
  {
    this.services.GetJobById(this.Id).subscribe((res)=>{
      this.job=res
      console.log(res)
    })
  }
  Apply()
  {
    this.ApplyForm.patchValue({
      ApplicationDate:Date.now,
      JobSeekerId:this.userconnect[0].jobSeekerId,
      JobId:this.job.job.jobId

    })
    console.log(this.ApplyForm.value)
    this.PublicServices.ApplyToJob(this.ApplyForm.value).subscribe((res)=>{
      console.log(res) 
      Swal.fire()
    }) 
  }
  GetFeedBackByJobs()
  {
    this.feedBack.GetFeedBackByJob(this.Id).subscribe((res:any)=>{
      this.feedBacks=res.map((item: any) => {
        return{"Feed":item[0],"JS":item[1]}
      })
      console.log(this.feedBacks)
    })
    
  }
  PostFeedBack()
  {
    this.FeedBackForm.patchValue({
      JobId:this.Id,
      JobSeekerId:this.userconnect[0].jobSeekerId
    })
    this.feedBack.PostFeedBack(this.FeedBackForm.value).subscribe((res)=>{
      console.log(res)
      this.GetFeedBackByJobs()
    })
  }
  GoToProfile(P:any)
  {
    console.log(P)
    if(P.role=='JobSeeker')
    {
      window.location.href="/PublicProfile/"+P.jobSeekerId+"/"+P.role
    }
    if(P.role=='Company')
    {
      window.location.href="/PublicProfile/"+P.companyId+"/"+P.role
    }
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
