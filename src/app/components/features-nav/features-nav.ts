import { Component , signal } from '@angular/core';

@Component({
  selector: 'app-features-nav',
  imports: [],
  templateUrl: './features-nav.html',
  styleUrl: './features-nav.scss'
})
export class FeaturesNav {
cardNumber = signal(1|2|3)
}
