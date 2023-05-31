import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PublicServicesService } from 'src/app/Services/public-services.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  AllJobs:any[]
  userconnect=localStorage.getItem("userconnect")
  closeResult = '';
  ApplyForm:FormGroup

  constructor(private services:PublicServicesService,private builder:FormBuilder,private modalService: NgbModal) { }

  ngOnInit(): void {
    this.GetAllJobs()
  }
  GetAllJobs()
  {
    this.services.GetAllJobs().subscribe((res:any)=>{
      this.AllJobs=res.map((item: any) => {
        return{"C":item[0],"J":item[1]}
      })
      console.log(this.AllJobs)
    })
  }


  open(content:any) {
    
    this.ApplyForm=this.builder.group({
      JobSeekerId:['',Validators.required],
      JobId:['',Validators.required],
      CoverLettre:['',Validators.required],
      ApplicationDate:['',Validators.required]
    })


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
