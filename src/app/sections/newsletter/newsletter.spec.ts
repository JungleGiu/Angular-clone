import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';
import { Newsletter } from './newsletter';

describe('Newsletter', () => {
  let component: Newsletter;
  let fixture: ComponentFixture<Newsletter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Newsletter],
      providers: [provideZonelessChangeDetection()],
    })
    .compileComponents();

    fixture = TestBed.createComponent(Newsletter);
    component = fixture.componentInstance;
    component.submitted = false
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it ('should validate email form', () => {
    component.email = 'valid@example.com';
    expect(component.validateEmail()).toBeTrue();
    component.email = 'invalid-email';
    expect(component.validateEmail()).toBeFalse();
  })

  it ('should show alert message when submitting valid email', () => {
    spyOn(window, 'alert');
    component.email = '2iKq5@example.com'
    const button : HTMLButtonElement = fixture.nativeElement.querySelector('button');
    button.click();
    fixture.detectChanges();
    expect(window.alert).toHaveBeenCalledWith('Subscribed successfully!');
    expect(component.submitted).toBeTrue();
  });
  it ('should change class of newsletter-email when email is invalid', () => {
    component.email = 'email'
    const button : HTMLButtonElement = fixture.nativeElement.querySelector('button');
    button.click();
    fixture.detectChanges();
    const emailInput = fixture.nativeElement.querySelector('#newsletter-email');
    expect(emailInput.classList.contains('error')).toBeTruthy();
    expect(component.submitted).toBeTrue();
  });

});
