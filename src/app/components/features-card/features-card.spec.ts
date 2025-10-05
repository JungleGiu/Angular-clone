import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';
import { FeaturesCard } from './features-card';

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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
