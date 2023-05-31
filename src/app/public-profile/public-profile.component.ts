import { Component, OnInit } from '@angular/core';
import { PublicServicesService } from '../Services/public-services.service';
import { ActivatedRoute } from '@angular/router';
import { ChatService } from '../Services/chat.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-public-profile',
  templateUrl: './public-profile.component.html',
  styleUrls: ['./public-profile.component.css']
})
export class PublicProfileComponent implements OnInit {
  Id=this.Activeroute.snapshot.params['Id']
  role=this.Activeroute.snapshot.params['Role']
  userconnect=JSON.parse(localStorage.getItem('userconnect')!);
  Company:any
  JobSeeker:any
  Conversation:FormGroup
  ChatGroup:FormGroup
  constructor(private services:PublicServicesService,private Activeroute:ActivatedRoute,private chat:ChatService,private builder:FormBuilder) { }

  ngOnInit(): void {
    this.GetUser()
    this.ChatGroup=this.builder.group({

    })
    this.Conversation=this.builder.group({
      CompanyId: ['',Validators.required],
      JobSeekerId: ['',Validators.required],
    })
    
  }

  GetUser()
  {
    if(this.role=='Company')
    {
      this.services.GetCompanyById(this.Id).subscribe((res)=>{
        this.Company=res
        console.log('Company',res)})
    }

    if(this.role=='JobSeeker')
    {
      this.services.GetJobSeekerById(this.Id).subscribe((res)=>{
        this.JobSeeker=res
        console.log('JobSeeker',res)
      })
    }

  }
  CreateConversation()
  {
    if(this.role=='JobSeeker')
    {
      this.chat.CreateChatGroup(this.ChatGroup.value).subscribe((res)=>{
        console.log(res)
      })
    }
    if(this.role=='Company')
    {
      this.Conversation.patchValue({
        CompanyId:this.Id,
        JobSeekerId:this.userconnect[0].jobSeekerId
      })
      console.log(this.Conversation.value)
      this.chat.CreateConversation(this.Conversation.value).subscribe((res)=>{
        console.log(res)
      })
    }
  }

}
