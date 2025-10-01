import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';
@Component({
  selector: 'app-newsletter',
  imports: [FormsModule , NgClass],
  templateUrl: './newsletter.html',
  styleUrl: './newsletter.scss'
})
export class Newsletter {
email = ''
submitted = false;
validateEmail = () =>{
  this.submitted = true;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(this.email)
}
alertMessage = () => {
  if(this.submitted && this.validateEmail()){
    return alert('Subscribed successfully!')
  }
}
}
