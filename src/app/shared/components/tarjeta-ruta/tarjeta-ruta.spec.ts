import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TarjetaRuta } from './tarjeta-ruta';

describe('TarjetaRuta', () => {
  let component: TarjetaRuta;
  let fixture: ComponentFixture<TarjetaRuta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TarjetaRuta],
    }).compileComponents();

    fixture = TestBed.createComponent(TarjetaRuta);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
