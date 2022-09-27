import { Component, OnInit } from '@angular/core';
import { Trainer } from 'src/app/models/trainer.model';
import { PokemonService } from 'src/app/services/pokemon.service';
import { TrainerService } from 'src/app/services/trainer.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  //constructor() { }

  //ngOnInit(): void {
    
  //}

  private _trainer?: Trainer;

  get trainer() {
    return this._trainer!;
  }
  constructor(private readonly trainerService: TrainerService, private readonly pokemonService: PokemonService) { }

  public logout(){
    this.trainerService.logout()
  }

  ngOnInit(): void {
    this._trainer = this.trainerService.trainer
  }

}
