import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';
import { DownloadCard } from './download-card';
import { downloadCardMocks } from './download-card-mocks.spec';

describe('DownloadCard', () => {
  let component: DownloadCard;
  let fixture: ComponentFixture<DownloadCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DownloadCard],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(DownloadCard);
    component = fixture.componentInstance;
    component.browsers = downloadCardMocks;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('shold render a card for each element of the received browsers array', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const downloadCards = compiled.querySelectorAll('.download-card');
    expect(downloadCards.length).toBe(component.browsers.length);
  });
});
