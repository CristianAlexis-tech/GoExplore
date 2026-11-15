import { Injectable } from '@angular/core';
import { ItemEquipamiento, RutaSenderismo } from '../models/ruta.model';

/**
 * Servicio centralizado para gestionar el catálogo de rutas, la mochila del usuario y el equipamiento.
 * @author Integrante 1
 * @version 1.0
 */
@Injectable({
  providedIn: 'root'
})
export class RutasService {
  // Listado inicial de rutas de senderismo
  private rutas: RutaSenderismo[] = [
    {
      id: 1,
      nombre: 'Laguna Grande de Peñalara',
      zona: 'Sierra de Guadarrama',
      distanciaKm: 6.5,
      duracionHoras: '2h 30m',
      dificultad: 'Baja',
      destacada: true,
      enMochila: true
    },
    {
      id: 2,
      nombre: 'Ruta del Cares',
      zona: 'Picos de Europa',
      distanciaKm: 12.0,
      duracionHoras: '4h 00m',
      dificultad: 'Media',
      destacada: true,
      enMochila: false
    },
    {
      id: 3,
      nombre: 'Ascensión al Mulhacén',
      zona: 'Sierra Nevada',
      distanciaKm: 16.4,
      duracionHoras: '6h 30m',
      dificultad: 'Alta',
      destacada: true,
      enMochila: false
    },
    {
      id: 4,
      nombre: 'Bosque de Orgi',
      zona: 'Valle de Ultzama',
      distanciaKm: 4.2,
      duracionHoras: '1h 15m',
      dificultad: 'Baja',
      destacada: false,
      enMochila: false
    },
    {
      id: 5,
      nombre: 'Cola de Caballo por las Gradas',
      zona: 'Ordesa y Monte Perdido',
      distanciaKm: 17.5,
      duracionHoras: '5h 15m',
      dificultad: 'Media',
      destacada: true,
      enMochila: false
    },
    {
      id: 6,
      nombre: 'Refugio de Urriellu (Naranjo)',
      zona: 'Picos de Europa',
      distanciaKm: 13.8,
      duracionHoras: '5h 45m',
      dificultad: 'Alta',
      destacada: false,
      enMochila: false
    }
  ];

  // Listado inicial de equipamiento recomendado
  private equipamiento: ItemEquipamiento[] = [
    { id: 1, nombre: 'Botas de montaña con suela adherente', categoria: 'Calzado y Ropa', completado: true },
    { id: 2, nombre: 'Chaqueta cortavientos impermeable', categoria: 'Calzado y Ropa', completado: false },
    { id: 3, nombre: 'Cantimplora con mínimo 1.5L de agua', categoria: 'Seguridad y Agua', completado: true },
    { id: 4, nombre: 'Botiquín básico y manta térmica', categoria: 'Seguridad y Agua', completado: false },
    { id: 5, nombre: 'Mapa físico o track GPS descargado', categoria: 'Orientación', completado: false },
    { id: 6, nombre: 'Batería externa (Powerbank) cargada', categoria: 'Orientación', completado: false }
  ];

  /** Obtiene todas las rutas disponibles */
  obtenerRutas(): RutaSenderismo[] {
    return [...this.rutas];
  }

  /** Obtiene únicamente las rutas destacadas para la portada */
  obtenerDestacadas(): RutaSenderismo[] {
    return this.rutas.filter(r => r.destacada);
  }

  /** Obtiene las rutas guardadas en la mochila del senderista */
  obtenerMochila(): RutaSenderismo[] {
    return this.rutas.filter(r => r.enMochila);
  }

  /** Alterna el estado de guardado de una ruta en la mochila */
  alternarMochila(idRuta: number): void {
    const ruta = this.rutas.find(r => r.id === idRuta);
    if (ruta) {
      ruta.enMochila = !ruta.enMochila;
    }
  }

  /** Obtiene la lista de equipamiento */
  obtenerEquipamiento(): ItemEquipamiento[] {
    return [...this.equipamiento];
  }

  /** Marca o desmarca un ítem de equipamiento */
  alternarEquipamiento(idItem: number): void {
    const item = this.equipamiento.find(i => i.id === idItem);
    if (item) {
      item.completado = !item.completado;
    }
  }
}