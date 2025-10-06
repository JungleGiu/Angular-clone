import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';
import { Download } from './download';
import { By } from '@angular/platform-browser';
import { DownloadCard } from '../../components/download-card/download-card';
import { TextContent } from '../../components/text-content/text-content';


describe('Download', () => {
  let component: Download;
  let fixture: ComponentFixture<Download>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Download],
      providers: [provideZonelessChangeDetection()],
    })
    .compileComponents();

    fixture = TestBed.createComponent(Download);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it ('should render app-text-content', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-text-content')).toBeTruthy();
  });
  it ('should pass title and description to app-text-content', () => {
     const textContentDE = fixture.debugElement.query(By.directive(TextContent));
     const textContentInstance = textContentDE.componentInstance as TextContent;
     expect(textContentInstance.textContentTitle).toBe('Download the extension');
     expect(textContentInstance.textContentDescription).toBe('We’ve got more browsers in the pipeline. Please do let us know if you’ve got a favourite you’d like us to prioritize.');
   });

  it ('should pass browsers array to app-download-card', () => {
    const downloadCardDE = fixture.debugElement.queryAll(By.directive(DownloadCard));
    const downloadCardInstance = downloadCardDE[0].componentInstance as DownloadCard;
    expect(downloadCardInstance.browsers).toEqual(component.browsers);
  })
});