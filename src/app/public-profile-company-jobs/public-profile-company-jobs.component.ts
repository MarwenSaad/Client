import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ModalDismissReasons, NgbDate, NgbModal ,NgbModalConfig, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { CompaniesService } from '../Services/companies.service';
import { PublicServicesService } from '../Services/public-services.service';

@Component({
  selector: 'app-public-profile-company-jobs',
  templateUrl: './public-profile-company-jobs.component.html',
  styleUrls: ['./public-profile-company-jobs.component.css'],
  providers: [NgbModalConfig, NgbModal],
})
export class PublicProfileCompanyJobsComponent implements OnInit {
SpontaniousForm:FormGroup
ApplicationForm:FormGroup
closeResult:any
userconnect=JSON.parse(localStorage.getItem('userconnect')!)
Jobs:any[]
CompanyId=this.Activeroute.parent?.snapshot.params['Id']
CV:any

  constructor( private modalService:NgbModal,config: NgbModalConfig,private builder:FormBuilder,private Activeroute:ActivatedRoute,public services:PublicServicesService,private company:CompaniesService) {

       config.backdrop = false;
       config.keyboard = true;
   }

  ngOnInit(): void {

    this.SpontaniousForm=this.builder.group({
      JobSeekerId:['',Validators.required],
      CompanyId:['',Validators.required],
      FirstName:['',Validators.required],
      LastName:['',Validators.required],
      CoverLettre:['',Validators.required],
      Cv:['',Validators.required],
      Date:['',Validators.required]
    })
    this.ApplicationForm=this.builder.group({
      JobSeekerId:['',Validators.required],
      JobId:['',Validators.required],
      CoverLetter:['',Validators.required],
      ApplicationDate:['',Validators.required],
      IsAccepted:['',Validators.required],
      IsReceive:['',Validators.required],
    })
    this.GetJobByCompany()
    
  }
  Apply()
  {
    this.services.ApplyToJob(this.ApplicationForm.value).subscribe((res)=>{
      console.log(res)
    })
  }
  SentSpontanious()
  {
    this.SpontaniousForm.patchValue({
      JobSeekerId:this.userconnect[0].jobSeekerId,
      CompanyId:this.CompanyId,
      Date:Date,
      Cv:this.CV
    })
    this.services.SpontaniousApplication(this.SpontaniousForm.value).subscribe((res)=>{
      Swal.fire()
      ModalDismissReasons.ESC
    })
  }

  GetJobByCompany()
  {
    this.company.GetCompanyJob(this.CompanyId).subscribe((res:any)=>{
      this.Jobs=res.map((item: any) => {
        return{"C":item[0],"J":item[1]}
      })
      console.log(this.Jobs)
    })
  }

  open(content:any) {

    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;

    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });

  }
  openApplication(content:any,Job:any) {
    this.ApplicationForm.patchValue({
      JobSeekerId:this.userconnect[0].jobSeekerId,
      JobId:Job.J.jobId,
      ApplicationDate:Date.now,
      IsAccepted:false,
      IsReceive:false

    })
    console.log(this.ApplicationForm.value)

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

  handleUpload(event:any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
        this.CV=reader.result
        console.log(this.CV)
    }};
}
