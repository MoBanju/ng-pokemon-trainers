import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';
import { TrainerService } from 'src/app/services/trainer.service';

@Component({
  selector: 'app-collected-pokemon-list-item',
  templateUrl: './collected-pokemon-list-item.component.html',
  styleUrls: ['./collected-pokemon-list-item.component.css']
})
export class CollectedPokemonListItemComponent implements OnInit {

  constructor(private readonly trainerService: TrainerService) {}

  @Input() pokemon?: Pokemon;
  
  ngOnInit(): void {
  }

  handleRelease(){
    if(confirm(`Are you sure you want to release the ${this.pokemon!.name}?`)){
      this.trainerService.releasePokemon(this.pokemon!)
    }
  }

}
