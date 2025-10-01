import { Component, WritableSignal, Input } from '@angular/core';
import { FeaturesDetails } from '../../sections/features/features';

@Component({
  selector: 'app-features-nav',
  imports: [],
  templateUrl: './features-nav.html',
  styleUrl: './features-nav.scss'
})
export class FeaturesNav {
@Input({required: true}) cardNumber!: WritableSignal<number>
@Input({required: true}) prevCardNumber!: WritableSignal<number>
@Input({required: true}) cards!: FeaturesDetails[]

setCardNumber(newCardNumber: number) {
  this.prevCardNumber.set(this.cardNumber())
  this.cardNumber.set(newCardNumber)
}
}
