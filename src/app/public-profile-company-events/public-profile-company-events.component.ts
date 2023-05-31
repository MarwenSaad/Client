import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompaniesService } from '../Services/companies.service';

@Component({
  selector: 'app-public-profile-company-events',
  templateUrl: './public-profile-company-events.component.html',
  styleUrls: ['./public-profile-company-events.component.css']
})
export class PublicProfileCompanyEventsComponent implements OnInit {
  CompanyId=this.Activeroute.parent?.snapshot.params['Id']
  Events:any[]
  userconnect=JSON.parse(localStorage.getItem("userconnect")!)

  constructor(private services:CompaniesService,private Activeroute:ActivatedRoute ) { }

  ngOnInit(): void {
    this.GetEvents()
  }
  GetEvents()
  {
    this.services.GetEventsByCompany(this.CompanyId).subscribe((res:any)=>{
      this.Events=res.map((item:any)=>{
        return{"E":item[0],"P":item[1]}})
      console.log('Events',this.Events)
    })
  }

}
