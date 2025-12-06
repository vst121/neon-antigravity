import { Component, inject } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { RouterLink } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { Store } from '@ngrx/store';

import { ThemeService } from '../../services/theme.service';
import { AuthService } from '../../auth/auth.service';
import { selectCartCount } from '../../store/cart/cart.selectors';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, MatBadgeModule, RouterLink, AsyncPipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  private store = inject(Store);
  cartCount$ = this.store.select(selectCartCount);

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
