import { Component } from '@angular/core';
import { UniversityDbModel } from '../shared/database/models/university-db.model';
import { db } from '../shared/database/db';

@Component({
    moduleId: module.id,
    selector: 'edu-university',
    templateUrl: 'education-university.component.html',
    styleUrls: ['../app.component.css']
})
export class EducationUniversityComponent {
    private uni: UniversityDbModel;
    constructor() {
        db.university.get(1).then(res => this.uni = res);
    }
}
