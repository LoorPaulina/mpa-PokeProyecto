import { Component } from '@angular/core';

import { HttpClientModule } from  '@angular/common/http';

//Importación de la interfaz
import { Pokemon } from '../../interfaces/pokemon';

//Importación del servicio
import { BuscaPokemonService } from '../../providers/busca-pokemon.service';

import { PokemonImg } from '../../interfaces/pokemon-img';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [HttpClientModule, FormsModule],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css',
  providers: [BuscaPokemonService]
  

})
export class IndexComponent {
  public data : Pokemon[] = [];
  public datosFiltrados: Pokemon[]=[];
  public pokemonName: string='';
  public pokemon2Sp: string='';
  public pokemonTipo: string='';
  public i= Math.floor(Math.random() * 10);
  public url: string="";
  public listUrls: string[]=[];
  public datosImg: PokemonImg[]=[];
  public valorInput: string = '';

  

  constructor(private dataProvider: BuscaPokemonService) { }

  ngOnInit() {
    this.dataProvider.getResponse().subscribe((response) => { 
      let dataArray = (response as Pokemon[]); 
      this.data = dataArray.slice(0,10);

      this.pokemonName = this.data[this.i].name;
      this.pokemon2Sp = this.data[this.i].sp_attack;
      this.pokemonTipo = this.data[this.i].type2;

      /*this.data=this.data.filter(pokemon=>pokemon.name==="Fushigidaneフシギダネ");*/
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

    filtrarElementos(tipo: string) {
      if  (tipo==''){
        this.datosFiltrados=this.data;
      }else{
        this.datosFiltrados=this.data.filter(elemento =>
        elemento.type2.toLowerCase().includes(tipo.toLocaleLowerCase())
      );
      }
    }

    
  obtenerValor() {
    console.log('Valor del input:', this.valorInput);
    // Puedes realizar más acciones con el valor del input aquí
  }

    


}

