import { Component } from '@angular/core';
import { PositionDbModel } from '../shared/database/models/position-db.model';
import { db } from '../shared/database/db';

@Component({
    moduleId: module.id,
    selector: 'experience-position',
    templateUrl: 'experience-position.component.html',
    styleUrls: ['experience-position.component.css']
})
export class ExperiencePositionComponent {
    currentPositions: PositionDbModel[] = [];
    pastPositions: PositionDbModel[] = [];
    constructor() {
        db.past_positions.toArray(res => this.pastPositions = res);
        db.current_positions.toArray(res => this.currentPositions = res);
    }
}
