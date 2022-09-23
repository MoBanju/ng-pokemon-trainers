import { Component, Input, OnInit } from '@angular/core';

import { PokemonDetailed } from 'src/app/models/pokemon-detailed.model';

@Component({
  selector: 'app-pokemon-display',
  templateUrl: './pokemon-display.component.html',
  styleUrls: ['./pokemon-display.component.css']
})
export class PokemonDisplayComponent implements OnInit {

  @Input() pokemon?: PokemonDetailed

  constructor() { }

  ngOnInit(): void {
  }

}
