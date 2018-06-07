import { TestBed, inject } from '@angular/core/testing';

import { FilmDirectorService } from './film-director.service';

describe('FilmDirectorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FilmDirectorService]
    });
  });

  it('should be created', inject([FilmDirectorService], (service: FilmDirectorService) => {
    expect(service).toBeTruthy();
  }));
});
