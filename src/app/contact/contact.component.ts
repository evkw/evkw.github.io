import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'resume-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  public tagline: string = `Full stack developer with 4 years experience in the financial sector. Enjoying working on furthering skills with Angular,
      Domain Driven Development and microservice architectures.`
  public phone: string = '0415 665 934';
  public location: string = "Sydney / Australia"
  public email: string = "wallace_evan10@hotmail.com";
}
