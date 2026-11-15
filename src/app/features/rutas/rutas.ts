import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RutasService } from '../../core/services/rutas.service';
import { RutaSenderismo } from '../../core/models/ruta.model';
import { TarjetaRuta } from '../../shared/components/tarjeta-ruta/tarjeta-ruta';
import { BuscadorRutas } from '../../shared/components/buscador-rutas/buscador-rutas';
/**
 * Página de catálogo completo de rutas con filtrado combinado en tiempo real.
 * @author Integrante 2
 * @version 1.0
 */
@Component({
  selector: 'app-rutas',
  standalone: true,
  imports: [CommonModule, TarjetaRuta, BuscadorRutas],
  templateUrl: './rutas.html',
  styleUrl: './rutas.css',
})
export class Rutas {
  private readonly rutasService = inject(RutasService);
  todasLasRutas: RutaSenderismo[] = this.rutasService.obtenerRutas();
  filtroTexto: string = '';
  filtroDificultad: string = 'Todas';
  /** Devuelve las rutas que cumplen simultáneamente el texto y la dificultad seleccionada */
  get rutasFiltradas(): RutaSenderismo[] {
    return this.todasLasRutas.filter((ruta) => {
      const coincideTexto =
        ruta.nombre.toLowerCase().includes(this.filtroTexto.toLowerCase()) ||
        ruta.zona.toLowerCase().includes(this.filtroTexto.toLowerCase());
      const coincideNivel =
        this.filtroDificultad === 'Todas' || ruta.dificultad === this.filtroDificultad;
      return coincideTexto && coincideNivel;
    });
  }
  actualizarTexto(nuevoTexto: string): void {
    this.filtroTexto = nuevoTexto;
  }
  actualizarDificultad(nuevoNivel: string): void {
    this.filtroDificultad = nuevoNivel;
  }
  gestionarMochila(idRuta: number): void {
    this.rutasService.alternarMochila(idRuta);
    this.todasLasRutas = this.rutasService.obtenerRutas();
  }
}
