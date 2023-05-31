import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HubConnection, HubConnectionBuilder, LogLevel } from '@microsoft/signalr';
import { AuthenticationService } from 'src/app/Services/authentication.service';
import { ChatService } from 'src/app/Services/chat.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  userconnect=JSON.parse(localStorage.getItem("userconnect")!)
  t=localStorage.getItem("token")

  role:any
  img:any
  title = 'SignalRClient';
  private hubConnectionBuilder: HubConnection
  offers:any[]=[]
  constructor(private route:Router,private service:AuthenticationService) { }

  ngOnInit(): void {


    if(this.userconnect!=null){
      this.img=this.userconnect[0].picture
      this.role=(this.userconnect[0].role)
    }

    this.hubConnectionBuilder = new HubConnectionBuilder()
      .withUrl(`${environment.baseUrl}/offers`)
      .configureLogging(LogLevel.Information)
      .build();
    this.hubConnectionBuilder
      .start()
      .then(() => console.log('Connection started.......!'))
      .catch(err => console.log('Error while connect with server'));
    this.hubConnectionBuilder.on('SendMessageToUser', (result:any) => {
      this.offers.push(result);
      console.log('Result',result)
    }); 

  }

  postjob()
  {
    if(this.userconnect!=null&&this.role=="Company")
    {
      window.location.href='/Profile/PostJob'
    }
    else{
      window.location.href='/Login'
    }
    
  }
  GoToFindJob()
  {
    window.location.href='/Layout'
  }
  LogOut()
  {
    this.service.LogOut(this.userconnect[0].email,"Marwen",this.t).subscribe((res)=>{
      if(res==true)
      {
        localStorage.clear()
        window.location.href='/'
      }
      console.log('Logout error',res)
    })
    
  }
}
