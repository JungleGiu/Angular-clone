import { Component } from '@angular/core';
import { TextContent } from '../../components/text-content/text-content';

@Component({
  selector: 'app-hero',
  imports: [TextContent],
  templateUrl: './hero.html',
  styleUrl: './hero.scss'
})
export class Hero {

}
