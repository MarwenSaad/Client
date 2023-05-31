import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicProfileAboutComponent } from './public-profile-about.component';

describe('PublicProfileAboutComponent', () => {
  let component: PublicProfileAboutComponent;
  let fixture: ComponentFixture<PublicProfileAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicProfileAboutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicProfileAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
