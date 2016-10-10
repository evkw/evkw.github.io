import { Component, Input } from '@angular/core';
import { PositionDbModel } from '../shared/database/models/position-db.model';

@Component({
    moduleId: module.id,
    selector: 'position-template',
    templateUrl: 'position-template.component.html',
    styleUrls: ['experience-position.component.css']
})
export class PositionTemplateComponent {
    @Input() position: PositionDbModel;
}