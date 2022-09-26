import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';
import { Trainer } from 'src/app/models/trainer.model';
import { PokemonService } from 'src/app/services/pokemon.service';
import { TrainerService } from 'src/app/services/trainer.service';

@Component({
  selector: 'app-trainer-page',
  templateUrl: './trainer-page.component.html',
  styleUrls: ['./trainer-page.component.css']
})
export class TrainerPageComponent implements OnInit {

  private _trainer?: Trainer;

  get trainer() {
    return this._trainer;
  }

  constructor(private readonly trainerService: TrainerService, private readonly pokemonService: PokemonService) { }

  public logout(){
    this.trainerService.logout()
  }

  ngOnInit(): void {
    this._trainer = this.trainerService.trainer
  }

}
