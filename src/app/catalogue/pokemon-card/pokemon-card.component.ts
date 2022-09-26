import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent implements OnInit {

  @Input() pokemon?: Pokemon; 
  @Output() capturePokemon= new EventEmitter<Pokemon>()

  constructor() { }

  ngOnInit(): void {
  }
  handleCapturePokemon(){
    this.capturePokemon.emit(this.pokemon)
  }
}
