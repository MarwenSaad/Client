import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileSettingsEductionsComponent } from './profile-settings-eductions.component';

describe('ProfileSettingsEductionsComponent', () => {
  let component: ProfileSettingsEductionsComponent;
  let fixture: ComponentFixture<ProfileSettingsEductionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileSettingsEductionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileSettingsEductionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
