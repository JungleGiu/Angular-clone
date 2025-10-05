import { TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';
import { MobileMenu } from './mobile-menu';

describe('MobileMenu', () => {
  let service: MobileMenu;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideZonelessChangeDetection()],
    });
    service = TestBed.inject(MobileMenu);

  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
