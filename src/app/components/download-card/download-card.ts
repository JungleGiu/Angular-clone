import { Component, Signal , Input} from '@angular/core';

@Component({
  selector: 'app-download-card',
  imports: [],
  templateUrl: './download-card.html',
  styleUrl: './download-card.scss'
})
export class DownloadCard {
@Input({required: true}) browser!: Signal<{image: string, title: string, version: string}>
}
