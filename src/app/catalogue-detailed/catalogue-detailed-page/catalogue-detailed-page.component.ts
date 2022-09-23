import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonDetailed } from 'src/app/models/pokemon-detailed.model';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-catalogue-detailed-page',
  templateUrl: './catalogue-detailed-page.component.html',
  styleUrls: ['./catalogue-detailed-page.component.css']
})
export class CatalogueDetailedPageComponent implements OnInit {

  pokemon?: PokemonDetailed;

  constructor(
    private readonly pokemonService: PokemonService,
    private readonly route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    let id = Number(this.route.snapshot.paramMap.get('id'));
    this.pokemonService.getPokemon(id).subscribe(pokemon => {this.pokemon = pokemon});
  }

}
