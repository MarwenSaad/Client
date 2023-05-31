import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../Services/post.service';

@Component({
  selector: 'app-public-profile-home',
  templateUrl: './public-profile-home.component.html',
  styleUrls: ['./public-profile-home.component.css']
})
export class PublicProfileHomeComponent implements OnInit {
  CommentForm:FormGroup
  userconnect=JSON.parse(localStorage.getItem('userconnect')!)
  Id=this.Activeroute.parent?.snapshot.params['Id']
  Role=this.Activeroute.parent?.snapshot.params['Role']
  role=this.userconnect[0].role
  Post:any[]
  comment:any[]
  
 
  constructor(private   Activeroute:ActivatedRoute,private builder:FormBuilder, private service:PostService) { }

  ngOnInit(): void {
    this.GetPost()
    this.CommentForm=this.builder.group({
      CommentText:['',Validators.required],
      JobSeekerId:[],
      CompanyId:[],
      Role:['',Validators.required],
      PostId:['',Validators.required]
    })
    
  }

  GetPost()
  {
    this.service.GetPostByUser(this.Role,this.Id).subscribe((res:any)=>{
      this.Post=res.map((item:any)=>{return{"U":item[0],"P":item[1]}})
      console.log(this.Post)
    })
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
    console.log()
    this.service.Comment(this.CommentForm.value).subscribe((res)=>{
      console.log('comment',res)
      this.GetCommentByPost(Post)
    })

  }
  GetCommentByPost(Post:any)
  {
    this.service.GetCommentByPost(Post.postId).subscribe((res:any)=>{
      this.comment=res.map((item:any)=>{return{"U":item[0],"C":item[1]}})
      console.log(this.comment)
    })
  }
}
