import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'resume-title-card',
  templateUrl: './title-card.component.html',
  styleUrls: ['./title-card.component.scss']
})
export class TitleCardComponent {
  @Input() title: string;
  @Input() icon: string;
}
