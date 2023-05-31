import { Component, OnInit } from '@angular/core';
import { PublicServicesService } from '../Services/public-services.service';

@Component({
  selector: 'app-browse-job-seeker',
  templateUrl: './browse-job-seeker.component.html',
  styleUrls: ['./browse-job-seeker.component.css']
})
export class BrowseJobSeekerComponent implements OnInit {
  JobSeekers:any

  constructor(private services:PublicServicesService) { }

  ngOnInit(): void {
    this.GetAllJobSeeker()
  }
  GetAllJobSeeker()
  {
    this.services.GetAllJobSeeker().subscribe((res)=>{
      this.JobSeekers=res
      console.log(res)
    })
  }

}
