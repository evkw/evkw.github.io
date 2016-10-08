import { Component, Input } from '@angular/core';

 import { Position } from '../contact/contact.model';

@Component({
    moduleId: module.id,
    selector: 'experience-position',
    templateUrl: 'experience-position.component.html'
})
export class ExperiencePositionComponent {
    @Input() position: any;
    private startDate: Date = new Date();
    constructor() { }
}