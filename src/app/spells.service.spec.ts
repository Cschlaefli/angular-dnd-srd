import { TestBed } from '@angular/core/testing';

import { SpellsService } from './spells.service';

describe('SpellsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpellsService = TestBed.get(SpellsService);
    expect(service).toBeTruthy();
  });
});
