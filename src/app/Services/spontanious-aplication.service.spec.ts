import { TestBed } from '@angular/core/testing';

import { SpontaniousAplicationService } from './spontanious-aplication.service';

describe('SpontaniousAplicationService', () => {
  let service: SpontaniousAplicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpontaniousAplicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
