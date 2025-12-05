import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './core/layout/header/header.component';
import { FooterComponent } from './core/layout/footer/footer.component';
import { SidenavComponent } from './core/layout/sidenav/sidenav.component';
import { MatSidenavModule } from '@angular/material/sidenav';

import { AuthService } from './core/auth/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, SidenavComponent, MatSidenavModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'neon-antigravity';

  constructor(private authService: AuthService) {
    console.log('AppComponent initialized, AuthService injected');
  }
}
