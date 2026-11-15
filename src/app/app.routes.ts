import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { Rutas } from './features/rutas/rutas';
import { Mochila } from './features/mochila/mochila';
import { Equipamiento } from './features/equipamiento/equipamiento';
import { Login } from './features/login/login';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'rutas', component: Rutas },
  { path: 'mochila', component: Mochila },
  { path: 'equipamiento', component: Equipamiento },
  { path: 'login', component: Login },
  { path: '**', redirectTo: 'home' }
];