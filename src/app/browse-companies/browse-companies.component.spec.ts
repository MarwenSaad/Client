import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseCompaniesComponent } from './browse-companies.component';

describe('BrowseCompaniesComponent', () => {
  let component: BrowseCompaniesComponent;
  let fixture: ComponentFixture<BrowseCompaniesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrowseCompaniesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrowseCompaniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
