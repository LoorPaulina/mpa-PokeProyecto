import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ChartsComponent } from './pages/charts/charts.component';
import { IndexComponent } from './pages/index/index.component';
import { BibliotecaComponent } from './pages/biblioteca/biblioteca.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, FooterComponent, ChartsComponent, IndexComponent,BibliotecaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mpa-Pokemon';
}
