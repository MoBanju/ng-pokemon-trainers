import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {

  @Output() logout: EventEmitter<void> = new EventEmitter()
  constructor(private readonly router: Router) { }

  handleLogout(): void{
    this.logout.emit()

  }
}
