import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';
import { PokemonService } from 'src/app/services/pokemon.service';
import { TrainerService } from 'src/app/services/trainer.service';

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
    private readonly trainerService: TrainerService
  ) { }

  ngOnInit(): void {
    if(this.pokemonService.Pokemons.length === 0)
      this.pokemonService.Next();
  }
  
  getPokemons() {
    this.pokemonService.Next();
  }

  capturePokemon(pokemon: Pokemon) {
    this.trainerService.capturePokemon(pokemon)
    console.log("cata " +  pokemon.name)
  }

}
