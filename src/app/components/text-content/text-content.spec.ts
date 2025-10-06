import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';
import { TextContent } from './text-content';

describe('TextContent', () => {
  let component: TextContent;
  let fixture: ComponentFixture<TextContent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextContent],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(TextContent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should render elements depending on the received props ', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('p')).toBeTruthy();

    if (component.textContentSuperTitle) {
      expect(compiled.querySelector('h1')).toBeTruthy();
    }
    if (component.textContentTitle) {
      expect(compiled.querySelector('h2')).toBeTruthy();
    }
    if (component.textContentSmallTitle) {
      expect(compiled.querySelector('h3')).toBeTruthy();
    }
  });
});
