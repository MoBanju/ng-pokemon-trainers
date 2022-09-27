import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';

export interface CollectPokemonEvent {
  pokemon: Pokemon,
  callBack: () => void,
}

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent implements OnInit {

  @Input() pokemon?: Pokemon; 
  @Input() isCollected: Boolean = false;

  @Output() collectPokemon= new EventEmitter<CollectPokemonEvent>()

  isLoading = false;

  constructor(
  ) { }

  ngOnInit(): void {
  }

  handleCollectPokemon(){
    if(typeof this.pokemon === "undefined") return;
    this.isLoading = true;
    this.collectPokemon.emit({pokemon: this.pokemon!, callBack: this.toggleIsLoading.bind(this)});
  }

  toggleIsLoading() {
    console.log("toggle is loading!")
    this.isLoading = !this.isLoading;
  }
}
