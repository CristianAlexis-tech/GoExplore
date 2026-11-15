import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BadgeDificultad } from './badge-dificultad';

describe('BadgeDificultad Component (Pruebas Unitarias)', () => {
  let component: BadgeDificultad;
  let fixture: ComponentFixture<BadgeDificultad>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BadgeDificultad]
    }).compileComponents();

    fixture = TestBed.createComponent(BadgeDificultad);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debe crearse correctamente', () => {
    expect(component).toBeTruthy();
  });

  it('debe aplicar la clase CSS badge--alta cuando el nivel es Alta', () => {
    fixture.componentRef.setInput('nivel', 'Alta');
    fixture.detectChanges();
    const span = (fixture.nativeElement as HTMLElement).querySelector('.badge');
    expect(span?.classList.contains('badge--alta')).toBe(true);
  });
});