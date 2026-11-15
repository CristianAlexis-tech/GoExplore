import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BuscadorRutas } from './buscador-rutas';

describe('BuscadorRutas', () => {
  let component: BuscadorRutas;
  let fixture: ComponentFixture<BuscadorRutas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuscadorRutas],
    }).compileComponents();

    fixture = TestBed.createComponent(BuscadorRutas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
