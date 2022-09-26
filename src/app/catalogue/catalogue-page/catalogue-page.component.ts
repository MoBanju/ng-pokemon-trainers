import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-catalogue-page',
  templateUrl: './catalogue-page.component.html',
  styleUrls: ['./catalogue-page.component.css']
})
export class CataloguePageComponent implements OnInit {

  get pokemons() {
    return this.pokemonService.Pokemons;
  }

  constructor(
    private readonly pokemonService: PokemonService,
  ) { }

  ngOnInit(): void {
    if(this.pokemonService.Pokemons.length === 0)
      this.pokemonService.Next();
  }
  
  getPokemons() {
    this.pokemonService.Next();
  }

}
