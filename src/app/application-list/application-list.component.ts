import { Component, OnInit } from '@angular/core';
import { JobSeekerService } from '../Services/job-seeker.service';

@Component({
  selector: 'app-application-list',
  templateUrl: './application-list.component.html',
  styleUrls: ['./application-list.component.css']
})
export class ApplicationListComponent implements OnInit {
userconnect=JSON.parse(localStorage.getItem('userconnect')!)
ApplicationList=[] as any
  constructor(private JSServices:JobSeekerService) { }

  ngOnInit(): void {
    this.GetApplicationList()
  }

  GetApplicationList()
  {
    this.JSServices.GetApplicationList(this.userconnect[0].jobSeekerId).subscribe((res:any)=>{
      if(res)
      {
        this.ApplicationList=res.map((item:any)=>{return{
          "App":item[0],
          "C":item[1]
        }})
      }
      console.log(this.ApplicationList)
    })
  }
}
