import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-collected-pokemon-list',
  templateUrl: './collected-pokemon-list.component.html',
  styleUrls: ['./collected-pokemon-list.component.css']
})
export class CollectedPokemonListComponent implements OnInit {

  constructor(private readonly userService: LocalStorageService) { }
  pokemons = this.userService.getPokemons();

  ngOnInit(): void {
  }

}
