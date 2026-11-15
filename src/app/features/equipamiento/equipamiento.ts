import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RutasService } from '../../core/services/rutas.service';
import { ItemEquipamiento } from '../../core/models/ruta.model';

/**
 * Página interactiva de lista de comprobación (checklist) de equipamiento de montaña.
 * @author Integrante 3
 * @version 1.0
 */


@Component({
  selector: 'app-equipamiento',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './equipamiento.html',
  styleUrl: './equipamiento.css'
})

export class Equipamiento {
  private readonly rutasService = inject(RutasService);
  listaItems: ItemEquipamiento[] = this.rutasService.obtenerEquipamiento();

  /** Calcula el número de elementos ya preparados */
  get completadosCount(): number {
    return this.listaItems.filter(i => i.completado).length;
  }
  
  marcarItem(id: number): void {
    this.rutasService.alternarEquipamiento(id);
    this.listaItems = this.rutasService.obtenerEquipamiento();
  }
}
