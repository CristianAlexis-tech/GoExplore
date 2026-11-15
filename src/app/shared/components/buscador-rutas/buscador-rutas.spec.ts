import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BuscadorRutas } from './buscador-rutas';
describe('BuscadorRutas Component', () => {
  let component: BuscadorRutas;
  let fixture: ComponentFixture<BuscadorRutas>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuscadorRutas],
    }).compileComponents();
    fixture = TestBed.createComponent(BuscadorRutas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('debe iniciar con la dificultad en "Todas"', () => {
    expect(component.dificultadActual).toBe('Todas');
  });
  it('debe cambiar la dificultad y emitir el evento al llamar a alCambiarDificultad()', () => {
    component.alCambiarDificultad('Alta');
    expect(component.dificultadActual).toBe('Alta');
  });
});
