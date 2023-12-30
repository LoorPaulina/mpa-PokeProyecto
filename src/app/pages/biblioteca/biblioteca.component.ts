import { Component } from '@angular/core';


import { Pokemon } from '../../interfaces/pokemon';
import { HttpClientModule } from '@angular/common/http';
import { BuscaPokemonService } from '../../providers/busca-pokemon.service';
import { PokemonImg } from '../../interfaces/pokemon-img';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-biblioteca',
  standalone: true,
  imports:[HttpClientModule,FormsModule],
  templateUrl: './biblioteca.component.html',
  styleUrl: './biblioteca.component.css',
  providers: [BuscaPokemonService]
})
export class BibliotecaComponent {
  public data : Pokemon[] = [];
  public url: string="";
  public datosFiltrados: Pokemon[]=[];
  public listUrls: string[]=[];
  public datosImg: PokemonImg[]=[];
  public valorInput: string = '';
  constructor(private dataProvider: BuscaPokemonService) { }

  ngOnInit() {
    this.dataProvider.getResponse().subscribe((response) => { 
      let dataArray = (response as Pokemon[]); 
      this.data = dataArray.slice(0,11);
      console.log(dataArray.slice(0,12));
  
    })
    
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
