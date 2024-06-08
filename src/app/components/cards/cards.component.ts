import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Carddata } from './carddata';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css',
})
export class CardsComponent {
  @Input() carddata!: Carddata;
}
