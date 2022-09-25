import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, mergeMap, Observable, of, tap } from 'rxjs';
import { PokemonDetailed } from '../models/pokemon-detailed.model';
import { Pokemon } from '../models/pokemon.model';
import { PokemonApiResponse } from '../models/pokemonApiResponse.model';
import { PokemonDetailedApiResponse } from '../models/pokemonDetailedApiResponse.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private _pokemons: Map<number, Pokemon | PokemonDetailed> = new Map<number, Pokemon | PokemonDetailed>();
  private _next: string = "https:/pokeapi.co/api/v2/pokemon/";
  private _limit: number = 10;

  constructor(
    private readonly http: HttpClient,
  ) { }

  get Pokemons(): Pokemon[] {
    return [... this._pokemons.values()];
  }

  getPokemon(id: number): Observable<PokemonDetailed> {
    let pokemon = this._pokemons.get(id) as PokemonDetailed;
    let url = "https://pokeapi.co/api/v2/pokemon/" + id + "/";
    if(typeof pokemon !== "undefined" && pokemon.isDetailed === true)
      return new BehaviorSubject<PokemonDetailed>(pokemon);
    return this.http.get<PokemonDetailedApiResponse>(url)
      .pipe(
        map((pokemon): PokemonDetailed => {
          let id = this.getPokemonId(url);
          return {
            id: id,
            name: pokemon.name,
            details: url,
            image: this.getPokemonImageUrl(id),
            height: pokemon.height,
            weight: pokemon.weight,
            isDetailed: true,
            baseExperience: pokemon.base_experience,
            type: pokemon.types[0].type.name,
            abilities: pokemon.abilities.map(ability => ability.ability.name),
          }
        }),
        tap(pokemon => {this._pokemons.set(pokemon.id, pokemon)}),
      )
  }

  Next() {
    this.http.get<PokemonApiResponse>(this._next)
      .pipe(
        tap(response => {
          this._next = response.next;
        }),
        map(response => {
          return response.results;
        }),
      )
      .subscribe({
        next: (pokemons) => {
          for(let pokemon of pokemons) {
            let id = this.getPokemonId(pokemon.url);
            if(!this._pokemons.has(id) || (this._pokemons.get(id) as PokemonDetailed).isDetailed === undefined) {
              this._pokemons.set(id, {
                id: id,
                name: pokemon.name,
                details: pokemon.url,
                image: this.getPokemonImageUrl(id),
              })
            }
          }
        },
        error: (error: HttpErrorResponse) => {
          console.error(error);
        },
      });
  }

  private getPokemonId(detailsUrl: string): number {
    let match = detailsUrl.match(POKEMON_URL_REGEX)!;
    return Number(match[1])
  }

  private getPokemonImageUrl(id: number) {
    return POKEMON_IMG_URL + id + '.png';
  }
}

const POKEMON_URL_REGEX = /^https:\/\/pokeapi\.co\/api\/v2\/pokemon\/([0-9]+)\/$/

const POKEMON_IMG_URL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'