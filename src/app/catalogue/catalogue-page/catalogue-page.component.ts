import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
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

  private _currentPage: BehaviorSubject<number> = new BehaviorSubject<number>(1);

  get pokemons(): Pokemon[] {
    let limit = this.pokemonService.limit;
    let offset = this._currentPage.value * this.pokemonService.limit - limit;
    return this.pokemonService.getPokemonRange(offset, limit);
  }

  get collectedPokemon(): Pokemon[] {
    return this.trainerService.trainer?.pokemon || [];
  }

  get currentPage(): number {
    return this._currentPage.value;
  }

  constructor(
    private readonly pokemonService: PokemonService,
    private readonly trainerService: TrainerService
  ) { }

  ngOnInit(): void {
    if(this.pokemonService.Pokemons.length === 0)
      this.pokemonService.Next();
    this._currentPage.subscribe(() => {
      let currentPage = this._currentPage.value;
      let limit = this.pokemonService.limit;
      if(this.pokemonService.Pokemons.length < currentPage * limit)
        this.pokemonService.Next();
    });
  }

  collectPokemon({pokemon, callBack}: CollectPokemonEvent) {
    this.trainerService.collectPokemon(pokemon, callBack);
  }

  nextPage() {
    this._currentPage.next(this._currentPage.value + 1);
  }

  previousePage() {
    if(this._currentPage.value > 1) {
      this._currentPage.next(this._currentPage.value - 1);
    }
  }

}
