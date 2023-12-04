import { Injectable } from '@angular/core';

 //Importación del HttpClient
 import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BuscaPokemonService {

  

  //Atributo URL
  private URL: string = 'https://pokemon.firebaseio.com/collection.json';
  constructor(private http:HttpClient) { }

  getResponse() {
    return this.http.get(this.URL);
}

}
