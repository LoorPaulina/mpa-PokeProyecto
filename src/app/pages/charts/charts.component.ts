import { Component } from '@angular/core';

import { BuscadorComponent } from '../../shared/buscador/buscador.component';
import { Pokemon } from '../../interfaces/pokemon';
import { HttpClientModule } from '@angular/common/http';
import { BuscaPokemonService } from '../../providers/busca-pokemon.service';




@Component({
  selector: 'app-charts',
  standalone: true,
  imports: [BuscadorComponent,HttpClientModule],
  templateUrl: './charts.component.html',
  styleUrl: './charts.component.css',
  providers: [BuscaPokemonService]

})
export class ChartsComponent {
  public data : Pokemon[] = [];
  public url: string="";
  public listUrls: string[]=[];

  constructor(private dataProvider: BuscaPokemonService) { }
  ngOnInit() {
    this.dataProvider.getResponse().subscribe((response) => { 
      let dataArray = (response as Pokemon[]); 
      this.data = dataArray.slice(0,10);
      console.log(dataArray.slice(0,10));
  
    })
    
  }

}
