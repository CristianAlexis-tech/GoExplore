import { Component, EventEmitter, Input, Output } from '@angular/core';

export type VarianteBoton = 'primario' | 'secundario';

/**
 * Componente presentacional de botón de llamada a la acción (CTA).
 * Recibe configuración por @Input y notifica pulsaciones mediante @Output.
 * @author Integrante 1
 * @version 1.0
 */
@Component({
  selector: 'app-boton-cta',
  standalone: true,
  templateUrl: './boton-cta.html',
  styleUrl: './boton-cta.css'
})
export class BotonCta {
  /** Texto visible dentro del botón */
  @Input() texto: string = 'Ver más';

  /** Estilo visual del botón: primario o secundario */
  @Input() variante: VarianteBoton = 'primario';

  /** Estado de bloqueo del botón */
  @Input() deshabilitado: boolean = false;

  /** Evento emitido al hacer clic cuando el botón está activo */
  @Output() accionClic = new EventEmitter<void>();

  /** Método que dispara el evento hacia el componente padre */
  alHacerClic(): void {
    if (!this.deshabilitado) {
      this.accionClic.emit();
    }
  }
}