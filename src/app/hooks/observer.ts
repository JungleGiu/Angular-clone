import { Directive, ElementRef, EventEmitter, OnInit, Output } from '@angular/core';

@Directive({
  selector: '[appObserver]'
})
export class Observer implements OnInit {

 @Output() visible = new EventEmitter<IntersectionObserverEntry>();

  constructor(private el: ElementRef) {}

  ngOnInit() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
             entry.target.classList.add('animate');
            
          }
        });
      },
      {
        threshold: 0.1, 
      }
    );
    observer.observe(this.el.nativeElement);

  }
}
