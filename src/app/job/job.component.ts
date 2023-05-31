import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CompaniesService } from '../Services/companies.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {
Jobs:any
userconnect=JSON.parse(localStorage.getItem("userconnect")!)
id:any
ApplyForm:FormGroup
  constructor(private services:CompaniesService,private builder:FormBuilder) { }

  ngOnInit(): void {
    this.id=this.userconnect[0].companyId
    console.log('id',this.id)
    this.GetJobs()
  }
  GetJobs()
  {
    this.services.GetCompanyJob(this.id).subscribe((res:any)=>{
      this.Jobs=res.map((item: any) => {
        return{"C":item[0],"J":item[1]}
      })
      console.log(this.Jobs)
      
    })
  }
}

