import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SkillsService } from '../Services/skills.service';

@Component({
  selector: 'app-get-questions',
  templateUrl: './get-questions.component.html',
  styleUrls: ['./get-questions.component.css']
})
export class GetQuestionsComponent implements OnInit {
TestId=this.route.snapshot.params['SkillsTestId']
ResponseForm:FormGroup
Questions:any[]
  constructor(private service:SkillsService,private route:ActivatedRoute,private builder:FormBuilder) { }

  ngOnInit(): void {
    this.GetQuestion()
    this.ResponseForm=this.builder.group({
      ResponseId:['',Validators.required],
      ResponseData:['',Validators.required],
      ResponseState:['',Validators.required],
    })
  }

  GetQuestion()
  {
    this.service.GetQuestions(this.TestId).subscribe((res:any)=>{
      this.Questions=res.map((item:any)=>{return{"Q":item[0],"R":item[1]}})
      console.log(this.Questions)
    })
  }

}
