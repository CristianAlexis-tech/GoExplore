import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Mochila } from './mochila';
describe('Mochila Component', () => {
  let component: Mochila;
  let fixture: ComponentFixture<Mochila>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mochila],
      providers: [provideRouter([])],
    }).compileComponents();
    fixture = TestBed.createComponent(Mochila);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('debe calcular el total de kilómetros de la mochila', () => {
    expect(component.totalKilometros).toBeGreaterThanOrEqual(0);
  });
});
