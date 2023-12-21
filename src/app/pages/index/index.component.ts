import { Component } from '@angular/core';

import { HttpClientModule } from  '@angular/common/http';

//Importación de la interfaz
import { Pokemon } from '../../interfaces/pokemon';

//Importación del servicio
import { BuscaPokemonService } from '../../providers/busca-pokemon.service';

import { PokemonImg } from '../../interfaces/pokemon-img';

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
  public pokemonName: string='';
  public pokemon2Sp: string='';
  public pokemonTipo: string='';
  public i= Math.floor(Math.random() * 11);
  public url: string="";
  public listUrls: string[]=[];
  public datosImg: PokemonImg[]=[];
  

  constructor(private dataProvider: BuscaPokemonService) { }

  ngOnInit() {
    this.dataProvider.getResponse().subscribe((response) => { 
      let dataArray = (response as Pokemon[]); 
      this.data = dataArray.slice(0,10);

      this.pokemonName = this.data[this.i].name;
      this.pokemon2Sp = this.data[this.i].sp_attack;
      this.pokemonTipo = this.data[this.i].type2;
      
      this.data=this.data.filter(pokemon=>pokemon.name==="Fushigidaneフシギダネ");

      
    })


  }  

  randomPokemonNombre(): string{ 
      return this.pokemonName;
    }

   randomPokemonSpAttack(): string{ 
      return this.pokemon2Sp;
    }

    randomPokemonTipo(): string{ 
      return this.pokemonTipo;
    }

    


}

