import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-download-card',
  imports: [],
  templateUrl: './download-card.html',
  styleUrl: './download-card.scss'
})
export class DownloadCard {
@Input({required: true}) browsers: {title: string, image: string, version: string}[]=[]
}
