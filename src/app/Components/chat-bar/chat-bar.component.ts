import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/Services/chat.service';

@Component({
  selector: 'app-chat-bar',
  templateUrl: './chat-bar.component.html',
  styleUrls: ['./chat-bar.component.css']
})
export class ChatBarComponent implements OnInit {
userconnect=JSON.parse(localStorage.getItem('userconnect')!)
Allchat:any[]
  constructor(private chat:ChatService) { }

  ngOnInit(): void {
    this.GetChat();
  }

  GetChat()
  {
    if(this.userconnect[0].role=='JobSeeker')
    {
      this.chat.GetChat(this.userconnect[0].jobSeekerId,this.userconnect[0].role).subscribe((res:any)=>{
        this.Allchat=res.map((item:any)=>{return{"C":item[0],"Ch":item[1]}})
        console.log(res)
      })
    }
    if(this.userconnect[0].role=='Company')
    {
      this.chat.GetChat(this.userconnect[0].companyId,this.userconnect[0].role).subscribe((res:any)=>{
        this.Allchat=res.map((item:any)=>{return{"J":item[0],"Ch":item[1]}})
        console.log(res)
      })
    }
    
  }
  

}
