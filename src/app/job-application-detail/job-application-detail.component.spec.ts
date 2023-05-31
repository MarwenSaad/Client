import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobApplicationDetailComponent } from './job-application-detail.component';

describe('JobApplicationDetailComponent', () => {
  let component: JobApplicationDetailComponent;
  let fixture: ComponentFixture<JobApplicationDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobApplicationDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobApplicationDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
