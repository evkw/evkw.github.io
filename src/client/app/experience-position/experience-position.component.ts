import { Component, Input } from '@angular/core';

 import { Position } from '../contact/contact.model';

@Component({
    moduleId: module.id,
    selector: 'experience-position',
    templateUrl: 'experience-position.component.html',
    styleUrls: ['experience-position.component.css']
})
export class ExperiencePositionComponent {
    @Input() position: any;
    constructor() { }
}