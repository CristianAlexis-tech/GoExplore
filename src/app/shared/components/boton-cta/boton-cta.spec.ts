import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BotonCta } from './boton-cta';

describe('BotonCta Component (Pruebas Unitarias)', () => {
  let component: BotonCta;
  let fixture: ComponentFixture<BotonCta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotonCta]
    }).compileComponents();

    fixture = TestBed.createComponent(BotonCta);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debe crearse correctamente la instancia del componente', () => {
    expect(component).toBeTruthy();
  });

  it('debe tener el texto "Ver más" y variante "primario" por defecto', () => {
    expect(component.texto).toBe('Ver más');
    expect(component.variante).toBe('primario');
  });

  it('debe emitir el evento accionClic cuando no está deshabilitado', () => {
    let emitido = false;
    component.accionClic.subscribe(() => (emitido = true));
    component.alHacerClic();
    expect(emitido).toBe(true);
  });
});