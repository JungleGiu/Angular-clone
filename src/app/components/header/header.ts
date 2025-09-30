import { Component, signal } from '@angular/core';
import { MobileMenu } from '../../services/mobile-menu';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  
})
export class Header {
  
  constructor (public mobileMenu: MobileMenu) {}

}
