import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';

@Component({
  selector: 'app-collected-pokemon-list-item',
  templateUrl: './collected-pokemon-list-item.component.html',
  styleUrls: ['./collected-pokemon-list-item.component.css']
})
export class CollectedPokemonListItemComponent implements OnInit {

  constructor() {}

  @Input() pokemon?: Pokemon;
  
  ngOnInit(): void {
  }

}
