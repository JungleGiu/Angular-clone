import { Component, Input, Signal } from '@angular/core';
import { TextContent } from '../text-content/text-content';
import { FeaturesDetails } from '../../sections/features/features';
@Component({
  selector: 'app-features-card',
  imports: [TextContent, ],
  templateUrl: './features-card.html',
  styleUrl: './features-card.scss'
})
export class FeaturesCard {
@Input({required: true}) cardNumber!: Signal<number>
@Input({required: true}) cards!: Signal <FeaturesDetails[]> 
}
