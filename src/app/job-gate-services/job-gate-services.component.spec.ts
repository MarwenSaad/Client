import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobGateServicesComponent } from './job-gate-services.component';

describe('JobGateServicesComponent', () => {
  let component: JobGateServicesComponent;
  let fixture: ComponentFixture<JobGateServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobGateServicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobGateServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
