# GoExplore - Aplicación SPA de Senderismo

## Descripción
Aplicación web SPA (*Single Page Application*) desarrollada en Angular para la consulta de rutas de montaña, planifi

## Características Principales
- **Arquitectura Modular Standalone:** Organización limpia en capas (`core`, `shared` y `features`).
- **5 Componentes de Página Navegables:** `Home` (portada), `Explorar Rutas` (catálogo filtrable), `Mi Mochila` (favoritos y  cálculo de km), `Equipamiento` (checklist interactivo) y `Acceso` (Login/Registro).
- **4 Componentes Presentacionales Reutilizables:** `BotonCta`, `BadgeDificultad`, `TarjetaRuta` y `BuscadorRutas` comunicados mediante `@Input()` y `@Output()`.
- **Pruebas Unitarias Automatizadas:** Cobertura de componentes de lógica y DOM con Jasmine y Karma (`TestBed` y `ComponentFixture`).

## Tecnologías Utilizadas
- **Framework:** Angular 18+ (Standalone Components)
- **Lenguaje:** TypeScript
- **Styling:** CSS3 con variables nativas (Custom Properties)
- **Routing:** Angular Router

## Instalación y/o configuración
1. Clonar el repositorio o descomprimir el archivo entregable.
2. Instalar las dependencias ejecutando:
    ```bash
    npm install
 
3. Levantar el servidor de desarrollo local:

    ng serve -o

4. Ejecutar la suite de pruebas unitarias:

    ng test

5. Generar el empaquetado de producción en la carpeta dist/:

    ng build

Prerrequisitos

    Node.js 18+
    npm 9+
    Angular CLI 17+