import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { SigninComponent } from './signin/signin.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SigninComponent, RouterModule],
  template: ` <main>
    <router-outlet></router-outlet>
  </main>`,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'zeraki-dashboard';
}
