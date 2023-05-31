import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicProfileCompanyEventsComponent } from './public-profile-company-events.component';

describe('PublicProfileCompanyEventsComponent', () => {
  let component: PublicProfileCompanyEventsComponent;
  let fixture: ComponentFixture<PublicProfileCompanyEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicProfileCompanyEventsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicProfileCompanyEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
