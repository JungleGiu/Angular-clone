import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MobileMenu {
  private  _isOpen = signal(false);

  readonly isOpen = this._isOpen

  toggle() {
    this._isOpen.set(!this._isOpen());
  }

  open() {
    this._isOpen.set(true);
  }

  close() {
    this._isOpen.set(false);
  }
   closeOnNavigate() {
    this.close();
  }
}
