import { Component } from '@angular/core';

import { BuscadorComponent } from '../../shared/buscador/buscador.component';
import { Pokemon } from '../../interfaces/pokemon';
import { HttpClientModule } from '@angular/common/http';
import { BuscaPokemonService } from '../../providers/busca-pokemon.service';
import { PokemonImg } from '../../interfaces/pokemon-img';
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
  public url: string="";
  public listUrls: string[]=[];
  public datosImg: PokemonImg[]=[];
  constructor(private dataProvider: BuscaPokemonService) { }

  ngOnInit() {
    this.dataProvider.getResponse().subscribe((response) => { 
      let dataArray = (response as Pokemon[]); 
      this.data = dataArray.slice(0,10);
      console.log(dataArray.slice(0,10));
  
    })
    
  }
  
  
}
