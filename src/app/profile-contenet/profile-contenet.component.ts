import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostService } from '../Services/post.service';

@Component({
  selector: 'app-profile-contenet',
  templateUrl: './profile-contenet.component.html',
  styleUrls: ['./profile-contenet.component.css']
})
export class ProfileContenetComponent implements OnInit {
PostForm:FormGroup
role:any
Id:any
Post:any[]
userconnect=JSON.parse(localStorage.getItem('userconnect')!)
  constructor(private builder:FormBuilder, private service:PostService) { }

  ngOnInit(): void {
    this.role=this.userconnect[0].role
    if(this.role=="JobSeeker")
    {
      this.Id=this.userconnect[0].jobSeekerId
    }
    if(this.role=="Company")
    {
      this.Id=this.userconnect[0].companyId
    }
    this.GetPost()
    this.PostForm=this.builder.group({
      Text:['',Validators.required],
      Data:['',Validators.required],
      //PostDate:['',Validators.required],
      Role:['',Validators.required],
      CompanyId:['',Validators.required],
      JobSeekerId:['',Validators.required],
      //AdminId:['',Validators.required],
    })
  }

  CreatePoste()
  {
    if(this.role=='JobSeeker')
    {
      this.PostForm.patchValue({
        Role:this.role,
        JobSeekerId:this.userconnect[0].jobSeekerId,
        CompanyId:null
      })
    }
    if(this.role=='Company')
    {
      this.PostForm.patchValue({
        Role:this.role,
        JobSeekerId:null,
        CompanyId:this.userconnect[0].companyId,
      })
    }
   
    this.service.CreatePost(this.PostForm.value).subscribe((res)=>{
      console.log(res)
      this.GetPost()
    })
  }

  GetPost()
  {
    this.service.GetPostByUser(this.role,this.Id).subscribe((res:any)=>{
      this.Post=res.map((item:any)=>{return{"U":item[0],"P":item[1]}})
      console.log(this.Post)
    })
  }

  DeletePost(PostId:any)
  {
    this.service.DeletePost(PostId).subscribe((res)=>{
      console.log(res)
      this.GetPost()
    })
    
  }
}
