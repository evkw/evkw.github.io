import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExperienceComponent } from './experience.component';
import { ExperiencePositionComponent } from '../experience-position/experience-position.component';
import { ExperienceSkillsComponent } from '../experience-skills/experience-skills.component';
import { PositionTemplateComponent } from '../experience-position/position-template.component';

@NgModule({
    imports: [CommonModule],
    exports: [ExperienceComponent],
    declarations:
    [
        ExperienceComponent,
        ExperiencePositionComponent,
        ExperienceSkillsComponent,
        PositionTemplateComponent
    ]
})
export class ExperienceModule { }
