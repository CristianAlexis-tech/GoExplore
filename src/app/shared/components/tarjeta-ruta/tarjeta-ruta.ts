import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NivelDificultad } from '../../../core/models/ruta.model';
import { BadgeDificultad } from '../badge-dificultad/badge-dificultad';
import { BotonCta } from '../boton-cta/boton-cta';
/**
 * Componente presentacional que renderiza la ficha visual de una ruta de senderismo.
 * @author Integrante 2
 * @version 1.0
 */
@Component({
  selector: 'app-tarjeta-ruta',
  standalone: true,
  imports: [CommonModule, BadgeDificultad, BotonCta],
  templateUrl: './tarjeta-ruta.html',
  styleUrl: './tarjeta-ruta.css',
})
export class TarjetaRuta {
  @Input() idRuta: number = 0;
  @Input() nombre: string = 'Ruta sin nombre';
  @Input() zona: string = 'Zona desconocida';
  @Input() distanciaKm: number = 0;
  @Input() duracionHoras: string = '0h';
  @Input() dificultad: NivelDificultad = 'Baja';
  @Input() enMochila: boolean = false;
  @Input() imagen: string = '';

  /** Evento que emite el ID de la ruta cuando el usuario pulsa guardar o quitar */
  @Output() cambiarMochila = new EventEmitter<number>();
  
  notificarCambio(): void {
    this.cambiarMochila.emit(this.idRuta);
  }
}
