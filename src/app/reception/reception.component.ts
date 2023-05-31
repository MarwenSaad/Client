import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JobSeekerSignUpModule } from '../job-seeker-sign-up/job-seeker-sign-up.module';
import { PostService } from '../Services/post.service';

@Component({
  selector: 'app-reception',
  templateUrl: './reception.component.html',
  styleUrls: ['./reception.component.css']
})
export class ReceptionComponent implements OnInit {
Post:any[]
role:any
CommentForm:FormGroup
PostForm:FormGroup
userconnect=JSON.parse(localStorage.getItem('userconnect')!)
comment:any[]
  constructor(private builder:FormBuilder,private services:PostService) { }

  ngOnInit(): void {
    this.role=this.userconnect[0].role
    this.GetPost()
    this.CommentForm=this.builder.group({
      CommentText:['',Validators.required],
      JobSeekerId:[],
      CompanyId:[],
      Role:['',Validators.required],
      PostId:['',Validators.required]
    })
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
  GoToProfile(P:any)
  {
    console.log(P)
    if(P.role=="JobSeeker")
    {
      window.location.href="/PublicProfile/"+P.jobSeekerId+"/"+P.role
    }
    if(P.role=="Company")
    {
      window.location.href="/PublicProfile/"+P.companyId+"/"+P.role
    }
    
  }

 Comment(Post:any)
  {
    if(this.role=="JobSeeker")
    {
      this.CommentForm.patchValue({
        JobSeekerId:this.userconnect[0].jobSeekerId,
        PostId: Post.postId,
        Role:this.role
      })
    }
    if(this.role=="Company")
    {
      this.CommentForm.patchValue({
        CompanyId:this.userconnect[0].companyId,
        PostId:Post.postId,
        Role:this.role
      })
    }
    this.services.Comment(this.CommentForm.value).subscribe((res)=>{
      console.log('comment',res)
      this.GetCommentByPost(Post)
    })

  }
  GetCommentByPost(Post:any)
  {
    this.services.GetCommentByPost(Post.postId).subscribe((res:any)=>{
      this.comment=res.map((item:any)=>{return{"U":item[0],"C":item[1]}})
      console.log(this.comment)
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
   
    this.services.CreatePost(this.PostForm.value).subscribe((res)=>{
      console.log(res)
      this.GetPost()
    })
  }

  GetPost()
  {
    this.services.GetPost().subscribe((res:any)=>{
      this.Post=res.map((item:any)=>{
        return{"U":item[0],"P":item[1]}})
      console.log('Post',this.Post)
    })
  }
}
