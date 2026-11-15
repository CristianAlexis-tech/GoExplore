import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RutasService } from '../../core/services/rutas.service';
import { RutaSenderismo } from '../../core/models/ruta.model';
import { BotonCta } from '../../shared/components/boton-cta/boton-cta';
import { BadgeDificultad } from '../../shared/components/badge-dificultad/badge-dificultad';

/**
 * Componente de página principal (Home).
 * Muestra el banner de bienvenida, rutas destacadas y consejos básicos.
 * @author Integrante 1
 * @version 1.0
 */
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, BotonCta, BadgeDificultad],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  private readonly rutasService = inject(RutasService);
  private readonly router = inject(Router);

  /** Lista de rutas destacadas mostradas en el escaparate inicial */
  rutasDestacadas: RutaSenderismo[] = this.rutasService.obtenerDestacadas();

  /** Navega hacia el catálogo completo de rutas */
  irAlCatalogo(): void {
    this.router.navigate(['/rutas']);
  }
}