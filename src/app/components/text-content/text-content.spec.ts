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
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextContent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
