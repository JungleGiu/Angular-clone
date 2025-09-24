import { Component, Input  } from '@angular/core';
import { NgSwitch , NgIf, NgClass } from '@angular/common';

@Component({
  selector: 'app-text-content',
  imports: [NgSwitch, NgIf , NgClass],
  templateUrl: './text-content.html',
  styleUrl: './text-content.scss'
})
export class TextContent {
@Input() textContentSuperTitle?: string = '';
@Input() textContentTitle?: string = '';
@Input() textContentSmallTitle?: string = '';
@Input() textContentDescription: string = '';
}
