import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';

@Component({
  selector: 'app-collected-pokemon-list',
  templateUrl: './collected-pokemon-list.component.html',
  styleUrls: ['./collected-pokemon-list.component.css']
})
export class CollectedPokemonListComponent implements OnInit {

  constructor() { }
  @Input() pokemons?: Pokemon[];

  ngOnInit(): void {
  }

}
