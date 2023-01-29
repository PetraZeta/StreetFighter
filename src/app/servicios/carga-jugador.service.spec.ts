import { TestBed } from '@angular/core/testing';

import { CargaJugadorService } from './carga-jugador.service';

describe('CargaJugadorService', () => {
  let service: CargaJugadorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CargaJugadorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
