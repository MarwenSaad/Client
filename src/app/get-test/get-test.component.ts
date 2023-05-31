import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SkillsService } from '../Services/skills.service';

@Component({
  selector: 'app-get-test',
  templateUrl: './get-test.component.html',
  styleUrls: ['./get-test.component.css']
})
export class GetTestComponent implements OnInit {
  SkillsId=this.route.snapshot.params['SkillsId']
  Test:any
  constructor(private service:SkillsService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.GetTest()
  }

  GetTest()
  {
    this.service.GetSkillsTest(this.SkillsId).subscribe((res)=>{
      this.Test=res
      console.log(res)

    })
  }

}
