import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicProfileCompanyJobsComponent } from './public-profile-company-jobs.component';

describe('PublicProfileCompanyJobsComponent', () => {
  let component: PublicProfileCompanyJobsComponent;
  let fixture: ComponentFixture<PublicProfileCompanyJobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicProfileCompanyJobsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicProfileCompanyJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
