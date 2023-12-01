import { Routes } from '@angular/router';
import { ChartsComponent } from './pages/charts/charts.component';
import { IndexComponent } from './pages/index/index.component';

export const routes: Routes = [
    { path: '', component: IndexComponent },
    { path: 'charts', component: ChartsComponent },
];
