import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpontaniousApplicationComponent } from './spontanious-application.component';

describe('SpontaniousApplicationComponent', () => {
  let component: SpontaniousApplicationComponent;
  let fixture: ComponentFixture<SpontaniousApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpontaniousApplicationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpontaniousApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
