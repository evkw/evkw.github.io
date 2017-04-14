import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'resume-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.scss']
})
export class ContactDetailComponent {
  @Input() icon: string;
  @Input() text: string;
  @Input() showDivide: boolean = true;
}