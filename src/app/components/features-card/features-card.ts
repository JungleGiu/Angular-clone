import { Component, Input, Signal } from '@angular/core';
import { NgIf } from '@angular/common';
import { TextContent } from '../text-content/text-content';
@Component({
  selector: 'app-features-card',
  imports: [TextContent, NgIf],
  templateUrl: './features-card.html',
  styleUrl: './features-card.scss'
})
export class FeaturesCard {
@Input({required: true}) cardNumber!: Signal< 1 | 2 | 3>
}
