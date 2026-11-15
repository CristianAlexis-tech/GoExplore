import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Rutas } from './rutas';
describe('Rutas Component', () => {
  let component: Rutas;
  let fixture: ComponentFixture<Rutas>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Rutas],
    }).compileComponents();
    fixture = TestBed.createComponent(Rutas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('debe filtrar las rutas por dificultad correctamente', () => {
    component.actualizarDificultad('Alta');
    expect(component.rutasFiltradas.every((r) => r.dificultad === 'Alta')).toBe(true);
  });
});
