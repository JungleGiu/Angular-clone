import { Component , signal } from '@angular/core';
import { TextContent } from '../../components/text-content/text-content';
import { FeaturesNav } from '../../components/features-nav/features-nav';
import { FeaturesCard } from '../../components/features-card/features-card';
@Component({
  selector: 'app-features',
  imports: [TextContent, FeaturesNav, FeaturesCard],
  templateUrl: './features.html',
  styleUrl: './features.scss'
})
export class Features {
cardNumber = signal<1 | 2 | 3>(1)
}
