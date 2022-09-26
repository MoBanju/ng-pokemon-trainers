import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Pokemon } from '../../models/pokemon.model';
import { PokemonService } from 'src/app/services/pokemon.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  @Input() pokemons?: Pokemon[];

  @Output() getPokemons: EventEmitter<void> = new EventEmitter();

  
  @Output() capturePokemon: EventEmitter<Pokemon> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  handleScroll(e: Event) {
    let target = e.target as HTMLDivElement;
    if(target.scrollTop + target.clientHeight === target.scrollHeight && this.getPokemons !== undefined)
      this.getPokemons.emit();
  }

  handleCapturePokemon(pokemon: Pokemon){
    this.capturePokemon.emit(pokemon)
    console.log("list "+ pokemon.name)
  }

}
