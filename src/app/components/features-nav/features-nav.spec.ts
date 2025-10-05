import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';
import { FeaturesNav } from './features-nav';

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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
