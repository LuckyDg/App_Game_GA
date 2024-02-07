// videojuego.service.spec.ts
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { VideojuegoService } from './videojuego.service';

describe('VideojuegoService', () => {
  let service: VideojuegoService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [VideojuegoService]
    });

    service = TestBed.inject(VideojuegoService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('debería ser creado', () => {
    expect(service).toBeTruthy();
  });

  it('debería obtener videojuegos desde la API', () => {
    const mockVideojuegos = [
        {
            id: 1,
            titulo: 'Test Game',
            descripcion: 'Descripción del Test Game',
            precio: 59.99,
            genero: 'Aventura',
            plataforma: 'PC',
            fecha_lanzamiento: new Date('2022-01-01'),
            stock: 100,
            fecha_creacion: new Date('2022-01-01')
        }
    ];

    service.getVideojuegos().subscribe(videojuegos => {
      expect(videojuegos.length).toBe(1);
      expect(videojuegos).toEqual(mockVideojuegos);
    });

    const req = httpTestingController.expectOne('http://localhost:7000/api/videojuegos');
    expect(req.request.method).toEqual('GET');
    req.flush(mockVideojuegos);
  });
});
