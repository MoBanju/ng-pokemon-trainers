import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {

  @Output() logout: EventEmitter<void> = new EventEmitter()
  constructor() { }

  handleLogout(): void{
    if(confirm("Are you sure you want to log out?")){
      this.logout.emit()
    }

  }
}
