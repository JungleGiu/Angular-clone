import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';
import { Header } from './header';
import { MobileMenu } from '../../hooks/mobile-menu';

describe('Header', () => {
  let component: Header;
  let fixture: ComponentFixture<Header>;
  let mobileMenu: MobileMenu;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Header],
      providers: [MobileMenu,provideZonelessChangeDetection()],
    })
    .compileComponents();

    fixture = TestBed.createComponent(Header);
    component = fixture.componentInstance;
    mobileMenu = TestBed.inject(MobileMenu);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it ('should NOT render mobile menu if NOT open', () => {
    const mobileMenuDiv = fixture.nativeElement.querySelector('#mobile-menu');
    expect(mobileMenuDiv).toBeNull();
  })
  it('should render header by default',() => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('header')).toBeTruthy();
  })
  it('should render mobile menu if open', () => {
    if (mobileMenu.isOpen()) {
      const mobileMenuDiv = fixture.nativeElement.querySelector('#mobile-menu');
      expect(mobileMenuDiv).toBeTruthy();
    }
  })
});
