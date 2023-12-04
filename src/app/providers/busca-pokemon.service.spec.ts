import { TestBed } from '@angular/core/testing';

import { BuscaPokemonService } from './busca-pokemon.service';

describe('BuscaPokemonService', () => {
  let service: BuscaPokemonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuscaPokemonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
