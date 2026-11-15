import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RutasService } from '../../core/services/rutas.service';
import { RutaSenderismo } from '../../core/models/ruta.model';
import { TarjetaRuta } from '../../shared/components/tarjeta-ruta/tarjeta-ruta';
import { BotonCta } from '../../shared/components/boton-cta/boton-cta';
/**
 * Página personal "Mi Mochila" que lista las rutas guardadas y calcula el total de kilómetros.
 * @author Integrante 2
 * @version 1.0
 */
@Component({
  selector: 'app-mochila',
  standalone: true,
  imports: [CommonModule, TarjetaRuta, BotonCta],
  templateUrl: './mochila.html',
  styleUrl: './mochila.css',
})
export class Mochila {
  private readonly rutasService = inject(RutasService);
  private readonly router = inject(Router);
  rutasGuardadas: RutaSenderismo[] = this.rutasService.obtenerMochila();
  /** Calcula la suma total de kilómetros planificados en la mochila */
  get totalKilometros(): number {
    const suma = this.rutasGuardadas.reduce((acc, r) => acc + r.distanciaKm, 0);
    return Math.round(suma * 10) / 10;
  }
  quitarDeMochila(idRuta: number): void {
    this.rutasService.alternarMochila(idRuta);
    this.rutasGuardadas = this.rutasService.obtenerMochila();
  }
  irAExplorar(): void {
    this.router.navigate(['/rutas']);
  }
}
