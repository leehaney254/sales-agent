import { Component } from '@angular/core';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [],
  template: `
    <form>
      <div>
        <label for="email">Email:</label>
        <input id="email" type="email" required />
      </div>
      <div>
        <label for="password">Password:</label>
        <input id="password" type="password" required />
      </div>
      <button type="submit">Sign In</button>
    </form>
  `,
  styleUrl: './signin.component.css',
})
export class SigninComponent {}
