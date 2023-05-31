import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { createUrlTreeFromSnapshot } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http:HttpClient) { }

  CreatePost(PostForm:any)
  {
    return this.http.post(`${environment.baseUrl}/api/Posts`,PostForm)
  }
  GetPost()
  {
    return this.http.get(`${environment.baseUrl}/api/Posts`)
  }
  GetPostByUser(Role:any,Id:any)
  {
    return this.http.get(`${environment.baseUrl}/api/Posts/User/${Role}/${Id}`)
  }
  DeletePost(PostId:any)
  {
   return this.http.delete(`${environment.baseUrl}/api/Posts/${PostId}`)
  }
  UpdatePost(PostId:any,Post:any)
  {
    return this.http.put(`${environment.baseUrl}/api/Posts/${PostId}`,Post)
  }
  Comment(Comment:any)
  {
    return this.http.post(`${environment.baseUrl}/api/PostComments`,Comment)
  }
  GetCommentByPost(Id:any)
  {
    return this.http.get(`${environment.baseUrl}/api/PostComments/Post/${Id}`)
  }
}
