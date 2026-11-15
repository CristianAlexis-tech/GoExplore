import { Component, Input } from '@angular/core';
import { NivelDificultad } from '../../../core/models/ruta.model';

@Component({
  selector: 'app-badge-dificultad',
  standalone: true,
  templateUrl: './badge-dificultad.html',
  styleUrl: './badge-dificultad.css'
})
export class BadgeDificultad {
  @Input() nivel: NivelDificultad = 'Baja';
}