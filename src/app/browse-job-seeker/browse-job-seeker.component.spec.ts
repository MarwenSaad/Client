import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseJobSeekerComponent } from './browse-job-seeker.component';

describe('BrowseJobSeekerComponent', () => {
  let component: BrowseJobSeekerComponent;
  let fixture: ComponentFixture<BrowseJobSeekerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrowseJobSeekerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrowseJobSeekerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
