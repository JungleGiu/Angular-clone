import { Component, Input} from '@angular/core';
import { Browser } from '../../sections/download/download';
@Component({
  selector: 'app-download-card',
  imports: [],
  templateUrl: './download-card.html',
  styleUrl: './download-card.scss'
})
export class DownloadCard {
@Input({required: true}) browsers: Browser[]=[]
}
