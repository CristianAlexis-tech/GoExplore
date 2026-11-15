import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Login } from './login';

describe('Login Component (Pruebas Unitarias)', () => {
  let component: Login;
  let fixture: ComponentFixture<Login>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Login]
    }).compileComponents();

    fixture = TestBed.createComponent(Login);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // 1 PRUEBAS DE LA CLASE (LÓGICA INTERNA)
  it('debe crearse correctamente la instancia del componente', () => {
    expect(component).toBeTruthy();
  });

  it('debe inicializarse con el modo de acceso en "login" por defecto', () => {
    expect(component.modo).toBe('login');
  });

  it('debe cambiar el estado de la propiedad "modo" al invocar cambiarModo()', () => {
    component.cambiarModo('registro');
    expect(component.modo).toBe('registro');
  });

  // 2 PRUEBAS DEL DOM (INTERFAZ DE USUARIO)
  it('debe mostrar el formulario de Login y ocultar el de Registro al iniciar', () => {

    const compiled = fixture.nativeElement as HTMLElement;
    const inputEmailLogin = compiled.querySelector('#login-email');
    const inputNombreRegistro = compiled.querySelector('#registro-nombre');

    expect(inputEmailLogin).toBeTruthy();
    expect(inputNombreRegistro).toBeFalsy();
  });

  it('debe alternar la visibilidad de los formularios en el DOM al cambiar el modo a "registro"', () => {
    component.cambiarModo('registro');
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const inputEmailLogin = compiled.querySelector('#login-email');
    const inputNombreRegistro = compiled.querySelector('#registro-nombre');

    expect(inputEmailLogin).toBeFalsy();
    expect(inputNombreRegistro).toBeTruthy();
  });

  it('debe aplicar la clase CSS de pestaña activa al botón correspondiente', () => {

    const botones = fixture.debugElement.queryAll(By.css('.acceso_pestaña'));
    const botonLogin = botones[0].nativeElement as HTMLButtonElement;
    const botonRegistro = botones[1].nativeElement as HTMLButtonElement;

    expect(botonLogin.classList.contains('acceso_pestaña--activa')).toBe(true);
    expect(botonRegistro.classList.contains('acceso_pestaña--activa')).toBe(false);
  });

  it('debe cambiar de modo automáticamente cuando el usuario hace clic en la pestaña "Registrarse"', () => {
    const botonRegistroDebug = fixture.debugElement.queryAll(By.css('.acceso_pestaña'))[1];
    botonRegistroDebug.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(component.modo).toBe('registro');
  });
});
