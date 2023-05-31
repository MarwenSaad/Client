import { Component, OnInit } from '@angular/core';
import { HubConnection, HubConnectionBuilder, LogLevel } from '@microsoft/signalr';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  title = 'SignalRClient';
  private hubConnectionBuilder: HubConnection
  userconnect=JSON.parse(localStorage.getItem('userconnect')!)
  offers:any[]=[]
  constructor() { }

  ngOnInit(): void {
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
}
