import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';
import { Home } from './home';


describe('Home', () => {
  let component: Home;
  let fixture: ComponentFixture<Home>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Home],
      providers: [provideZonelessChangeDetection()],
    })
    .compileComponents();

    fixture = TestBed.createComponent(Home);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should render main', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('main')).toBeTruthy();
  });
  it('should render app-hero', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-hero')).toBeTruthy();
  });
  it('should render app-features', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-features')).toBeTruthy();
  });
  it('should render app-download', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-download')).toBeTruthy();
  });
  it('should render app-newsletter', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-newsletter')).toBeTruthy();
  });
  it('should render app-faq', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-faq')).toBeTruthy();
  });
});
