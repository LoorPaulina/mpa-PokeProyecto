import { Routes } from '@angular/router';
import { ChartsComponent } from './pages/charts/charts.component';
import { BibliotecaComponent } from './pages/biblioteca/biblioteca.component';
import { IndexComponent } from './pages/index/index.component';

export const routes: Routes = [
    { path: 'index', component: IndexComponent },
    { path: 'charts', component: ChartsComponent },
    { path: 'biblioteca', component: BibliotecaComponent },
    { path: "**", redirectTo: 'index' }
];
