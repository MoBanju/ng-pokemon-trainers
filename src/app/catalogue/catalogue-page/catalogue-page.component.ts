import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';
import { PokemonService } from 'src/app/services/pokemon.service';
import { TrainerService } from 'src/app/services/trainer.service';
import { CollectPokemonEvent } from '../pokemon-card/pokemon-card.component';

@Component({
  selector: 'app-catalogue-page',
  templateUrl: './catalogue-page.component.html',
  styleUrls: ['./catalogue-page.component.css']
})
export class CataloguePageComponent implements OnInit {

  get pokemons() {
    return this.pokemonService.Pokemons;
  }

  get collectedPokemon() {
    return this.trainerService.trainer?.pokemon || [];
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

  collectPokemon({pokemon, callBack}: CollectPokemonEvent) {
    this.trainerService.collectPokemon(pokemon, callBack);
  }

}
