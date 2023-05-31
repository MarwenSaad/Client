import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanySpontaniousApplicationComponent } from './company-spontanious-application.component';

describe('CompanySpontaniousApplicationComponent', () => {
  let component: CompanySpontaniousApplicationComponent;
  let fixture: ComponentFixture<CompanySpontaniousApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanySpontaniousApplicationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanySpontaniousApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
