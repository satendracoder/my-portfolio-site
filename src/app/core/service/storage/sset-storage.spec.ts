import { TestBed } from '@angular/core/testing';

import { SSetStorage } from './sset-storage';

describe('SSetStorage', () => {
  let service: SSetStorage;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SSetStorage);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
