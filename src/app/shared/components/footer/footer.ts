import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

/**
 * Pie de página informativo con enlaces rápidos de la aplicación.
 * @author Integrante 1
 * @version 1.0
 */
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {
  anioActual: number = 2026;
}