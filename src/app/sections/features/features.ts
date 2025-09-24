import { Component } from '@angular/core';
import { TextContent } from '../../components/text-content/text-content';
import { FeaturesNav } from '../../components/features-nav/features-nav';
@Component({
  selector: 'app-features',
  imports: [TextContent, FeaturesNav],
  templateUrl: './features.html',
  styleUrl: './features.scss'
})
export class Features {

}
