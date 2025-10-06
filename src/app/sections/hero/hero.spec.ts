import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';
import { Hero } from './hero';
import { By } from '@angular/platform-browser';
import { TextContent } from '../../components/text-content/text-content';

describe('Hero', () => {
  let component: Hero;
  let fixture: ComponentFixture<Hero>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Hero],
      providers: [provideZonelessChangeDetection()],
    })
    .compileComponents();

    fixture = TestBed.createComponent(Hero);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create ', () => {
    expect(component).toBeTruthy();
  });

  it('should render app-text-content', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-text-content')).toBeTruthy();
  });

  it ('should pass title and description to app-text-content', () => {
    const textContentDE = fixture.debugElement.query(By.directive(TextContent));
    const textContentInstance = textContentDE.componentInstance as TextContent;
    expect(textContentInstance.textContentSuperTitle).toBe('A simple bookmark manager');
    expect(textContentInstance.textContentDescription).toBe('A clean and simple interface to organize your favorite websites. Open a new browser tab and see your sites load instantly. Try it for free.');
  });

  it('should render img', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('img')).toBeTruthy();
  });

  it('should render two buttons', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll('button').length).toBe(2);
    });
});
