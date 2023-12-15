import { Component } from '@angular/core';
import { ImagenPokemonService } from '../../providers/imagen-pokemon.service';
import { BuscadorComponent } from '../../shared/buscador/buscador.component';
import { Pokemon } from '../../interfaces/pokemon';
import { HttpClientModule } from '@angular/common/http';
import { BuscaPokemonService } from '../../providers/busca-pokemon.service';
@Component({
  selector: 'app-biblioteca',
  standalone: true,
  imports:[BuscadorComponent,HttpClientModule],
  templateUrl: './biblioteca.component.html',
  styleUrl: './biblioteca.component.css',
  providers: [BuscaPokemonService]
})
export class BibliotecaComponent {
  public data : Pokemon[] = [];
  public datosImg: any;
  constructor(private dataProvider: BuscaPokemonService, private provider: ImagenPokemonService) { }

  ngOnInit() {
    this.dataProvider.getResponse().subscribe((response) => { 
      let dataArray = (response as Pokemon[]); 
      this.data = dataArray.slice(0,10);
      console.log(dataArray.slice(0,10));
      console.log(this.provider.getDataByParam("Pikachu"));

    })
    
  }
  cargarDatosPorParametro(param: string): void {
    this.provider.getDataByParam(param).subscribe(
      (data) => {
        let dataImg= data;
        // Puedes realizar otras operaciones con los datos aquí si es necesario
      },
      (error) => {
        console.error('Error al obtener los datos desde la API:', error);
      }
    );
  }
}
