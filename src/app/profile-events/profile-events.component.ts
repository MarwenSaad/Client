import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ModalDismissReasons, NgbModal ,NgbModalConfig} from '@ng-bootstrap/ng-bootstrap';
import { CompaniesService } from '../Services/companies.service';

@Component({
  selector: 'app-profile-events',
  templateUrl: './profile-events.component.html',
  styleUrls: ['./profile-events.component.css']
})
export class ProfileEventsComponent implements OnInit {
  Events:any[]
  EventForm:FormGroup
  closeResult:any
  userconnect=JSON.parse(localStorage.getItem('userconnect')!)
  Picture:any[]=[]
  constructor(private builder:FormBuilder,config: NgbModalConfig,private services:CompaniesService,private Activeroute:ActivatedRoute,private modalService:NgbModal) { 
       config.backdrop = false;
       config.keyboard = true;
  }

  ngOnInit(): void {
    this.GetEvents()
    this.EventForm=this.builder.group({
      EventName:['',Validators.required],
      EventDescription:['',Validators.required],
      EventLocation:['',Validators.required],
      Picture:['',Validators.required],
      EndDate:['',Validators.required],
      CompanyId:['',Validators.required],
    })
  }

  GetEvents()
  {
    this.services.GetEventsByCompany(this.userconnect[0].companyId).subscribe((res:any)=>{
      this.Events=res.map((item:any)=>{
        return{"E":item[0],"P":item[1]}})
      console.log('Events',this.Events)
    })
  }
  DeleteEvents(Id:any)
  {
    this.services.DeleteEvents(Id).subscribe((res)=>{
      console.log(res)
      this.GetEvents()
    })
  }
  
  AddEvents()
  {
    this.EventForm.patchValue({
      CompanyId:this.userconnect[0].companyId,
      Picture:this.Picture
    })
    console.log(this.EventForm.value)
    this.services.AddEvent(this.EventForm.value).subscribe((res)=>{
      console.log(res)
      this.GetEvents()
    })
  }

  ApdateEvents(Events:any)
  {

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


    handleUpload(event:any) {
      const file = event.target.files;

      for (let i = 0; i < file.length!; i ++) {
        const reader = new FileReader();
        reader.readAsDataURL(file[i]);
        reader.onload = () => {
        if(reader.result !=null)
         {
           this.Picture.push(reader.result) 
           console.log(this.Picture)
        }
        
      }};
          
      };
}
