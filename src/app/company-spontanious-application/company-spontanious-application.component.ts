import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalDismissReasons, NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { SpontaniousAplicationService } from '../Services/spontanious-aplication.service';


@Component({
  selector: 'app-company-spontanious-application',
  templateUrl: './company-spontanious-application.component.html',
  styleUrls: ['./company-spontanious-application.component.css']
})
export class CompanySpontaniousApplicationComponent implements OnInit {
  userconnect=JSON.parse(localStorage.getItem("userconnect")!)
  spontanious:any
  Id:any
  AcceptForm:FormGroup
  closeResult:any
  constructor(config: NgbModalConfig,private services:SpontaniousAplicationService,private builder:FormBuilder,private modalService:NgbModal) {
       config.backdrop = false;
       config.keyboard = true;
   }

  ngOnInit(): void {
    this.Id=this.userconnect[0].companyId
    this.GetSpontaniousByCompany()
    this.AcceptForm=this.builder.group({
      SpontaniousApplicationId:['',Validators.required],
      CoverLettre:['',Validators.required],
      JobSeekerId:['',Validators.required],
      CompanyId:['',Validators.required],
      FirstName:['',Validators.required],
      LastName:['',Validators.required],
      IsAccepted:['',Validators.required],
      Date:['',Validators.required],
      CV:['',Validators.required]
    })

  }

  GetSpontaniousByCompany()
  {
    this.services.GetSpontaniousByCompany(this.Id).subscribe((res:any)=>{
      this.spontanious=res.map((item:any)=> {return{"S":item[0],"J":item[1]}})
      console.log(this.spontanious)
    })
  }
  GoToProfile(P:any)
  {
    console.log(P)
    window.location.href="/PublicProfile/"+P.jobSeekerId+"/"+P.role
  }
  Delete(id:any)
  {
    this.services.DeleteSpontaniousApplication(id).subscribe((res)=>{
      console.log(res)
      Swal.fire
      this.GetSpontaniousByCompany()
    })
  }
  Accept(S:any)
  {
    console.log(S)
    this.AcceptForm.patchValue({
      SpontaniousApplicationId:S.spontaniousApplicationId,
      CoverLettre:S.coverLettre,
      JobSeekerId:S.jobSeekerId,
      CompanyId:S.companyId,
      FirstName:S.firstName,
      LastName:S.lastName,
      IsAccepted:true,
      Date:S.date,
      CV:S.cv

    })

    this.services.UpdateSpontaniousApplication(S.spontaniousApplicationId,this.AcceptForm.value).subscribe((res)=>{
      console.log(res)
      this.GetSpontaniousByCompany()
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
  DownloadCv(Base64:any,fileName:any)
  {
      const link = document.createElement("a");
      link.href = Base64;
      link.download = `${fileName}.pdf`
      link.click();
  }
  
  SendEmail(Id:any)
  {
    
  }
}


