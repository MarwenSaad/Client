import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  constructor(private http:HttpClient) { }


  GetSkillsTest(id:any)
  {
    return this.http.get(`${environment.baseUrl}/api/SkillsTests/Skills/${id}`)
  }
  GetQuestions(TestId:any)
  {
    return this.http.get(`${environment.baseUrl}/api/Questions/AndResponse/${TestId}`)
  }

  SubmitResponse(IdSkillsTest:any,FormResponse:any)
  {

  }
}
