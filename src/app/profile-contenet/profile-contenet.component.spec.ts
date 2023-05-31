import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileContenetComponent } from './profile-contenet.component';

describe('ProfileContenetComponent', () => {
  let component: ProfileContenetComponent;
  let fixture: ComponentFixture<ProfileContenetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileContenetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileContenetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
