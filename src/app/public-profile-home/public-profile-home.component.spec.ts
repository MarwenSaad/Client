import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicProfileHomeComponent } from './public-profile-home.component';

describe('PublicProfileHomeComponent', () => {
  let component: PublicProfileHomeComponent;
  let fixture: ComponentFixture<PublicProfileHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicProfileHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicProfileHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
