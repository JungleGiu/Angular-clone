import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection, signal , WritableSignal} from '@angular/core';
import { FeaturesCard } from './features-card';
import { featuresCardsMocks } from './features-card-mocks.spec';
describe('FeaturesCard', () => {
  let component: FeaturesCard;
  let fixture: ComponentFixture<FeaturesCard>;

  let cardNumberSig: WritableSignal<number>;
  let prevCardNumberSig: WritableSignal<number>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturesCard],
      providers: [provideZonelessChangeDetection()],
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturesCard);
    component = fixture.componentInstance;
    cardNumberSig = signal(1);
    prevCardNumberSig = signal(1);
    component.cardNumber = cardNumberSig
    component.prevCardNumber = prevCardNumberSig
    component.cards = signal(featuresCardsMocks);
 
    fixture.detectChanges();
  });

   it('should create', () => {
     expect(component).toBeTruthy();
   });
   it('should render card', () => {
     const compiled = fixture.nativeElement as HTMLElement;
     expect(compiled.querySelector('.features-card')).toBeTruthy();
   });
  it ('should render a different card depending on card number', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const card = compiled.querySelector('.features-card');
    expect(card).toBeTruthy();
    expect(card?.getAttribute('id')).toEqual(String(component.cardNumber()));
  });
it('should compute "card-swipe-left" when prevCardNumber > cardNumber', () => {
  prevCardNumberSig.set(5); 
  cardNumberSig.set(1);
  fixture.detectChanges();
  expect(component.animationSwipe()).toBe('card-swipe-left');
});

it('should compute "card-swipe-right" when prevCardNumber <= cardNumber', () => {
  prevCardNumberSig.set(1);
  cardNumberSig.set(5);       
  fixture.detectChanges();
  expect(component.animationSwipe()).toBe('card-swipe-right');
});
});
