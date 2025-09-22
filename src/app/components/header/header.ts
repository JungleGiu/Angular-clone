import { Component, signal, WritableSignal, } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [NgIf],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
 isOpen = signal(false) ;

 toggleMobileMenu() {
    this.isOpen.set(!this.isOpen());
  }
}
