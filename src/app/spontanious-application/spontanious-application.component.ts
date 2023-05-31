import { Component, OnInit } from '@angular/core';
import { PublicServicesService } from '../Services/public-services.service';
import { SpontaniousAplicationService } from '../Services/spontanious-aplication.service';

@Component({
  selector: 'app-spontanious-application',
  templateUrl: './spontanious-application.component.html',
  styleUrls: ['./spontanious-application.component.css']
})
export class SpontaniousApplicationComponent implements OnInit {
  userconnect=JSON.parse(localStorage.getItem("userconnect")!)
  constructor(private services:SpontaniousAplicationService) { }

  ngOnInit(): void {
    this.GetSpontaniousByJobSeeker()
  }


  GetSpontaniousByJobSeeker()
  {
    this.services.GetSpontaniousByJobSeeker(this.userconnect[0].jobSeekerId).subscribe((res)=>{
      console.log('Spon',res)
    })
  }
}
