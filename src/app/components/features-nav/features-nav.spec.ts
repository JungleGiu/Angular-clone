import { ComponentFixture, TestBed } from '@angular/core/testing';
import { input, provideZonelessChangeDetection, signal, WritableSignal } from '@angular/core';
import { FeaturesNav } from './features-nav';
import { featuresCardsMocks } from '../features-card/features-card-mocks.spec';


describe('FeaturesNav', () => {
  let component: FeaturesNav;
  let fixture: ComponentFixture<FeaturesNav>;
 
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturesNav],
      providers: [provideZonelessChangeDetection()],
    })
    .compileComponents();
   
    fixture = TestBed.createComponent(FeaturesNav);
    component = fixture.componentInstance;
    component.cardNumber = signal(1)
    component.prevCardNumber = signal(1)
    component.cards = featuresCardsMocks
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it ('should render an input for each element of the received cards array', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const inputs = compiled.querySelectorAll('input');
    expect(inputs.length).toBe(component.cards.length);
  })
  it ('should render a label for each element of the received cards array', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const labels = compiled.querySelectorAll('label');
    expect(labels.length).toBe(component.cards.length);
  })
  it('should be capable to change cardNumber', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const inputs = compiled.querySelectorAll('input');
    inputs[0].click();
    fixture.detectChanges();
    expect(component.cardNumber()).toBe(1);
    inputs[1].click();
    fixture.detectChanges();
    expect(component.cardNumber()).toBe(2);
    inputs[2].click();
    fixture.detectChanges();
    expect(component.cardNumber()).toBe(3);
  })
});
