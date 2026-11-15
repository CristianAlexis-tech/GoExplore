import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Equipamiento } from './equipamiento';

describe('Equipamiento Component', () => {
  let component: Equipamiento;
  let fixture: ComponentFixture<Equipamiento>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Equipamiento]
    }).compileComponents();

    fixture = TestBed.createComponent(Equipamiento);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  
  it('debe cargar la lista de equipamiento inicial', () => {
    expect(component.listaItems.length).toBeGreaterThan(0);
  });
});
