import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
 isOpen = signal(false) ;

 toggleMobileMenu() {
    this.isOpen.set(!this.isOpen());
  }
}
