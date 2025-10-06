import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection, signal } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Features } from './features';
import { featuresCardsMocks } from '../../components/features-card/features-card-mocks.spec'; 
import { FeaturesCard } from '../../components/features-card/features-card';
import { FeaturesNav} from '../../components/features-nav/features-nav';
import { TextContent } from '../../components/text-content/text-content';

describe('Features', () => {
  let component: Features;
  let fixture: ComponentFixture<Features>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Features],
      providers: [provideZonelessChangeDetection()],
    })
    .compileComponents();

    fixture = TestBed.createComponent(Features);
    component = fixture.componentInstance;
    component.cards = signal(featuresCardsMocks);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it ('should render text-content', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-text-content')).toBeTruthy();
  });
   it ('should pass title and description to app-text-content', () => {
      const textContentDE = fixture.debugElement.query(By.directive(TextContent));
      const textContentInstance = textContentDE.componentInstance as TextContent;
      expect(textContentInstance.textContentTitle).toBe('Features');
      expect(textContentInstance.textContentDescription).toBe('Our aim is to make it quick and easy for you to access your favorite websites. Your bookmarks sync between your devices so you can access them on the go.');
    });
  it ('should render features-card', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-features-card')).toBeTruthy();
  });
  it ('should pass features array to features-card', () => {
    const featuresCardDE = fixture.debugElement.query(By.directive(FeaturesCard));
    const featuresCardInstance = featuresCardDE.componentInstance as FeaturesCard;
    expect(featuresCardInstance.cards()).toEqual(featuresCardsMocks);
  });
  it ('should pass cardNumber to features-card', () => {
    const featuresCardDE = fixture.debugElement.query(By.directive(FeaturesCard));
    const featuresCardInstance = featuresCardDE.componentInstance as FeaturesCard;
    expect(featuresCardInstance.cardNumber()).toEqual(1);
  });
  it ('should pass prevCardNumber to features-card', () => {
    const featuresCardDE = fixture.debugElement.query(By.directive(FeaturesCard));
    const featuresCardInstance = featuresCardDE.componentInstance as FeaturesCard;
    expect(featuresCardInstance.prevCardNumber()).toEqual(1);
  });
  it ('should render features-nav', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-features-nav')).toBeTruthy();
  });
  it ('should pass features array to features-nav', () => {
    const featuresNavDE = fixture.debugElement.query(By.directive(FeaturesNav));
    const featuresNavInstance = featuresNavDE.componentInstance as FeaturesNav;
    expect(featuresNavInstance.cards).toEqual(featuresCardsMocks);
  });
  it ('should pass cardNumber to features-nav', () => {
    const featuresNavDE = fixture.debugElement.query(By.directive(FeaturesNav));
    const featuresNavInstance = featuresNavDE.componentInstance as FeaturesNav;
    expect(featuresNavInstance.cardNumber()).toEqual(1);
  });
  it ('should pass prevCardNumber to features-nav', () => {
    const featuresNavDE = fixture.debugElement.query(By.directive(FeaturesNav));
    const featuresNavInstance = featuresNavDE.componentInstance as FeaturesNav;
    expect(featuresNavInstance.prevCardNumber()).toEqual(1);
  });
});
