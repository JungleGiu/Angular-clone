import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';
import { DownloadCard } from './download-card';

describe('DownloadCard', () => {
  let component: DownloadCard;
  let fixture: ComponentFixture<DownloadCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DownloadCard],
      providers: [provideZonelessChangeDetection()],
    })
    .compileComponents();

    fixture = TestBed.createComponent(DownloadCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
