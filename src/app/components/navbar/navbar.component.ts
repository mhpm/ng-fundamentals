import { Component } from '@angular/core';
import { AuthService } from 'src/app/modules/user/services/auth.service';

@Component({
  selector: 'nav-bar',
  templateUrl: './navbar.component.html',
})
export class NavbarCompoent {
  constructor(public authService: AuthService) {}
}
