import { Component } from '@angular/core';
import { Hero } from '../sections/hero/hero';
import { Features } from '../sections/features/features';
import { Download } from '../sections/download/download';
import { Faq } from '../sections/faq/faq';
import { Newsletter } from '../sections/newsletter/newsletter';

@Component({
  selector: 'app-home',
  imports: [Hero , Features , Download , Faq, Newsletter],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
