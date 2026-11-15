/**
 * Modelos de datos para las rutas de senderismo y equipamiento.
 * @author Integrante 1
 * @version 1.0
 */

export type NivelDificultad = 'Baja' | 'Media' | 'Alta';

export interface RutaSenderismo {
  id: number;
  nombre: string;
  zona: string;
  distanciaKm: number;
  duracionHoras: string;
  dificultad: NivelDificultad;
  destacada: boolean;
  enMochila: boolean;
  imagen: string;
}

export interface ItemEquipamiento {
  id: number;
  nombre: string;
  categoria: 'Calzado y Ropa' | 'Orientación' | 'Seguridad y Agua';
  completado: boolean;
}