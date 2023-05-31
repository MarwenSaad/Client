import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FeedBackService {

  constructor(private http:HttpClient) { }
  GetFeedBackByJob(JobId:any)
  {
    return this.http.get(`${environment.baseUrl}/api/FeedBacks/${JobId}`)
  }
  PostFeedBack(FeedBack:any)
  {
    return this.http.post(`${environment.baseUrl}/api/FeedBacks`,FeedBack)
  }
  DeletFeedBack(Id:any)
  {
    return this.http.delete(`${environment.baseUrl}/api/FeedBacks/${Id}`)
  }
}
