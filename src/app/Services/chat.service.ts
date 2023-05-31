import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private http:HttpClient) { }
  
  CreateConversation(ConverstionForm:any)
  {
    return this.http.post(`${environment.baseUrl}/api/Conversations`,ConverstionForm)
  }
  CreateChatGroup(ChatGroupForm:any)
  {
    return this.http.post(`${environment.baseUrl}/api/ChatGroups`,ChatGroupForm)
  }

  SendMessage(Message:any)
  {
    return this.http.post(`${environment.baseUrl}/api/Messages`,Message)
  }

  GetChat(UserId:any,Role:any)
  {
    return this.http.get(`${environment.baseUrl}/api/Conversations/${UserId}/${Role}`)
  }
}
