import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Trainer } from 'src/app/models/trainer.model';
import { TrainerService } from 'src/app/services/trainer.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  @Output() login: EventEmitter<void> = new EventEmitter()

  constructor(
    private readonly trainerService: TrainerService,
    private readonly userService: UserService) { }

  loginSubmit(loginForm: NgForm): void{

    const{username} = loginForm.value;
    
    this.trainerService.login(username).subscribe({
      next: (user: Trainer) => {
        this.userService.user=user;
        this.login.emit();
      },
      error: () => {

      }
    })
  }

}
