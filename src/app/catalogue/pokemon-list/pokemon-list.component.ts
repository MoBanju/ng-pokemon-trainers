import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Pokemon } from '../../models/pokemon.model';
import { CollectPokemonEvent } from '../pokemon-card/pokemon-card.component';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  @Input() pokemons?: Pokemon[];
  @Input() collectedPokemon: Pokemon[] = [];

  @Output() getPokemons: EventEmitter<void> = new EventEmitter();
  @Output() collectPokemon: EventEmitter<CollectPokemonEvent> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  handleScroll(e: Event) {
    let target = e.target as HTMLDivElement;
    if(target.scrollTop + target.clientHeight === target.scrollHeight && this.getPokemons !== undefined)
      this.getPokemons.emit();
  }

  handleCollectPokemon(capturePokemonEvent: CollectPokemonEvent){
    this.collectPokemon.emit(capturePokemonEvent)
  }

  isPokemonCollected(pokemon: Pokemon) {
    return this.collectedPokemon.some(collectedPokemon => collectedPokemon.id === pokemon.id);
  }

}
