import { Component } from '@angular/core';

import { HttpClientModule } from  '@angular/common/http';

//Importación de la interfaz
import { Pokemon } from '../../interfaces/pokemon';

//Importación del servicio
import { BuscaPokemonService } from '../../providers/busca-pokemon.service';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css',
  providers: [BuscaPokemonService]
  

})
export class IndexComponent {
  public data : Pokemon[] = [];

  constructor(private dataProvider: BuscaPokemonService) { }

  ngOnInit() {
    this.dataProvider.getResponse().subscribe((response) => { 
      let dataArray = (response as Pokemon[]); 
      this.data = dataArray.slice(0,10);

      console.log(dataArray.slice(0,10));
    })
  }
}
