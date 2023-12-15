import { TestBed } from '@angular/core/testing';

import { ImagenPokemonService } from './imagen-pokemon.service';

describe('ImagenPokemonService', () => {
  let service: ImagenPokemonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImagenPokemonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
