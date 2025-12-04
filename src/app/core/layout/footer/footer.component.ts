import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [MatToolbarModule],
  template: `
    <mat-toolbar color="primary" class="footer-toolbar">
      <span>&copy; 2025 Neon Antigravity. All rights reserved.</span>
    </mat-toolbar>
  `,
  styles: [`
    .footer-toolbar {
      font-size: 14px;
      justify-content: center;
    }
  `]
})
export class FooterComponent {

}
