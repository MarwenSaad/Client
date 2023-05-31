import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  
  userconnect=JSON.parse(localStorage.getItem("userconnect")!)
  img= this.userconnect[0].picture
  role=this.userconnect[0].role
  constructor() { }

  ngOnInit(): void {
      
  }
}
