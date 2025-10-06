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
  it ('should be closed by default', () => {
    expect(service.isOpen()).toBeFalse();
  })
  it ('should open menu', () => {
    service.open();
    expect(service.isOpen()).toBeTrue();
  })
  it ('should close menu', () => {
    service.close();
    expect(service.isOpen()).toBeFalse();
  })
  it ('should toggle menu', () => {
    service.toggle();
    expect(service.isOpen()).toBeTrue();
    service.toggle();
    expect(service.isOpen()).toBeFalse();
  })
  it ('should close menu on navigate', () => {
    service.open();
    service.closeOnNavigate();
    expect(service.isOpen()).toBeFalse();
  })
});
