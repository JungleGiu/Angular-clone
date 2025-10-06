import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection, signal } from '@angular/core';
import { FeaturesCard } from './features-card';
import { featuresCardsMocks } from './features-card-mocks';
describe('FeaturesCard', () => {
  let component: FeaturesCard;
  let fixture: ComponentFixture<FeaturesCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturesCard],
      providers: [provideZonelessChangeDetection()],
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturesCard);
    component = fixture.componentInstance;
    
    component.cardNumber = signal(1);
    component.prevCardNumber = signal(1);
    component.cards = signal(featuresCardsMocks);
    fixture.detectChanges();
  });

   it('should create', () => {
     expect(component).toBeTruthy();
   });
});
