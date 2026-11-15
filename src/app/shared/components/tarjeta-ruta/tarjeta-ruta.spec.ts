import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TarjetaRuta } from './tarjeta-ruta';
describe('TarjetaRuta Component', () => {
  let component: TarjetaRuta;
  let fixture: ComponentFixture<TarjetaRuta>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TarjetaRuta],
    }).compileComponents();
    fixture = TestBed.createComponent(TarjetaRuta);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('debe crearse correctamente', () => {
    expect(component).toBeTruthy();
  });
  it('debe emitir el idRuta cuando se invoca notificarCambio()', () => {
    component.idRuta = 5;
    let idRecibido = 0;
    component.cambiarMochila.subscribe((id) => (idRecibido = id));
    component.notificarCambio();
    expect(idRecibido).toBe(5);
  });
});
