import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

type ModoAcceso = 'login' | 'registro';

/**
 * Componente de página de Acceso y Registro de senderistas.
 * Permite alternar entre pestañas de inicio de sesión y alta de nuevo usuario.
 * @author Integrante 3
 * @version 1.0
 */

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})

export class Login {
  modo: ModoAcceso = 'login';
  emailLogin: string = '';
  nombreRegistro: string = '';
  mensajeConfirmacion: string | null = null;

  /** Cambia entre el modo login y registro limpiando mensajes previos */
  cambiarModo(nuevoModo: ModoAcceso): void {
    this.modo = nuevoModo;
    this.mensajeConfirmacion = null;
  }
  
  /** Simula el envío del formulario de acceso o registro */
  procesarFormulario(): void {
    this.mensajeConfirmacion =
      this.modo === 'login'
        ? 'Sesión iniciada correctamente. ¡Bienvenido a Senderos Cumbres!'
        : 'Cuenta de senderista creada con éxito.';
  }
}

