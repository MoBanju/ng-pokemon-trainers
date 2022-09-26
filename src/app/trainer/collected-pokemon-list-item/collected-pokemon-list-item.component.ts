import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-collected-pokemon-list-item',
  templateUrl: './collected-pokemon-list-item.component.html',
  styleUrls: ['./collected-pokemon-list-item.component.css']
})
export class CollectedPokemonListItemComponent implements OnInit {

  constructor(private readonly pokemonService: PokemonService) {}

   pokemon?: Pokemon

  ngOnInit(): void {
     this.pokemonService.getPokemon(1).subscribe((pokemon) => {

    })
  }

}
