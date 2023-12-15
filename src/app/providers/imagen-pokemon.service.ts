import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImagenPokemonService {

  //Atributo URL
  private URL: String = `https://pokeapi.co/api/v2/pokemon/`;
  constructor(private http:HttpClient) { }
  getDataByParam(param: String){
    const url = `${this.URL}${param}`;
    return this.http.get(url);
  }
 
}
