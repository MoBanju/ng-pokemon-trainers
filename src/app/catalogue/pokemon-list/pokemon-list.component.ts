import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

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

  @Output() collectPokemon: EventEmitter<CollectPokemonEvent> = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }


  handleCollectPokemon(capturePokemonEvent: CollectPokemonEvent){
    this.collectPokemon.emit(capturePokemonEvent)
  }

  isPokemonCollected(pokemon: Pokemon) {
    return this.collectedPokemon.some(collectedPokemon => collectedPokemon.id === pokemon.id);
  }

}
