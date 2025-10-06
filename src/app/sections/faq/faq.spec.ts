import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';
import { Faq } from './faq';
import { TextContent } from '../../components/text-content/text-content';
import { By } from '@angular/platform-browser';
import { faqMocks } from './faq-mocks.spec';

describe('Faq', () => {
  let component: Faq;
  let fixture: ComponentFixture<Faq>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Faq],
      providers: [provideZonelessChangeDetection()],
    })
    .compileComponents();

    fixture = TestBed.createComponent(Faq);
    component = fixture.componentInstance;
    component.faqs = faqMocks;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it ('should render app-text-content', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-text-content')).toBeTruthy();
  })

  it ('should pass title and description to app-text-content', () => {
    const textContentDE = fixture.debugElement.query(By.directive(TextContent));
    const textContentInstance = textContentDE.componentInstance as TextContent;
    expect(textContentInstance.textContentTitle).toBe('Frequently asked questions');
    expect(textContentInstance.textContentDescription).toBe('Here are some of our FAQs. If you have any other questions you’d like answered please feel free to email us.');
});

it ('should render a details element for each element of the received faqs array', () => {
  const compiled = fixture.nativeElement as HTMLElement;
  expect(compiled.querySelector('details')).toBeTruthy(); 
  expect(compiled.querySelectorAll('details').length).toBe(component.faqs.length);
  expect(compiled.querySelectorAll('summary').length).toBe(component.faqs.length);
});

});
