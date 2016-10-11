import { Component } from '@angular/core';
import { SkillDbModel } from '../shared/database/models/skill-db.model';
import { db } from '../shared/database/db';

@Component({
    moduleId: module.id,
    selector: 'experience-skills',
    templateUrl: 'experience-skills.component.html'
})
export class ExperienceSkillsComponent {
    private skills: SkillDbModel[];
    constructor() {
        db.skills.toArray(res => this.skills = res);
    }
}
