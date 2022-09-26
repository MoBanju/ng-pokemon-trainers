import { Component, OnInit } from '@angular/core';
import { TrainerService } from 'src/app/services/trainer.service';

@Component({
  selector: 'app-trainer-page',
  templateUrl: './trainer-page.component.html',
  styleUrls: ['./trainer-page.component.css']
})
export class TrainerPageComponent implements OnInit {

  constructor(private readonly trainerService: TrainerService) { }

  public logout(){
    this.trainerService.logout()
    console.log("logout")
  }

  ngOnInit(): void {
  }

}
