import { Component, OnInit } from '@angular/core';
import { PublicServicesService } from '../Services/public-services.service';

@Component({
  selector: 'app-browse-companies',
  templateUrl: './browse-companies.component.html',
  styleUrls: ['./browse-companies.component.css']
})
export class BrowseCompaniesComponent implements OnInit {
Companies:any
Con="data:image/jpeg;base64 ,"
img:any 
  constructor(private services:PublicServicesService) { }

  ngOnInit(): void {
    this.GetAllCompanies()
  }

  GetAllCompanies()
  {
    this.services.GetAllCompany().subscribe((res)=>{
      this.Companies=res
      console.log(res)
    })
  }
}
