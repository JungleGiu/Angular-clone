import { Component } from '@angular/core';
import { TextContent } from '../../components/text-content/text-content';
import { Observer } from "../../hooks/observer";
@Component({
  selector: 'app-hero',
  imports: [TextContent, Observer],
  templateUrl: './hero.html',
  styleUrl: './hero.scss'
})
export class Hero {

}
