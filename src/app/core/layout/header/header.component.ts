import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { RouterLink } from '@angular/router';

import { ThemeService } from '../../services/theme.service';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(public themeService: ThemeService, public authService: AuthService) { }

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }
}
