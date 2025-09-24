import { Component, WritableSignal, Input } from '@angular/core';


@Component({
  selector: 'app-features-nav',
  imports: [],
  templateUrl: './features-nav.html',
  styleUrl: './features-nav.scss'
})
export class FeaturesNav {
@Input({required: true}) cardNumber!: WritableSignal<1|2|3>
}
