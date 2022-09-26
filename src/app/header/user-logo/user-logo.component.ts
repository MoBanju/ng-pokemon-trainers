import { Component, Input, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-user-logo',
  templateUrl: './user-logo.component.html',
  styleUrls: ['./user-logo.component.css']
})
export class UserLogoComponent implements OnInit {
  constructor(private readonly userService: UserService) { }
  username = this.userService.getUsername();

  ngOnInit(): void {
    
  }

}
