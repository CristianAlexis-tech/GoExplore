import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
/**
 * Componente presentacional de filtrado por texto y nivel de dificultad.
 * @author Integrante 2
 * @version 1.0
 */
@Component({
  selector: 'app-buscador-rutas',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './buscador-rutas.html',
  styleUrl: './buscador-rutas.css',
})
export class BuscadorRutas {
  @Input() placeholderTexto: string = 'Buscar por nombre o sierra...';
  @Output() cambioTexto = new EventEmitter<string>();
  @Output() cambioDificultad = new EventEmitter<string>();
  textoActual: string = '';
  dificultadActual: string = 'Todas';
  alEscribir(): void {
    this.cambioTexto.emit(this.textoActual);
  }
  alCambiarDificultad(nivel: string): void {
    this.dificultadActual = nivel;
    this.cambioDificultad.emit(nivel);
  }
}
