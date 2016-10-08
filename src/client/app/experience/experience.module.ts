import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExperienceComponent } from './experience.component';
import { ExperiencePositionComponent } from '../experience-position/experience-position.component';
import { ExperienceSkillsComponent } from '../experience-skills/experience-skills.component';
import { ContactService } from '../contact/contact.service';

@NgModule({
    imports: [CommonModule],
    exports: [ExperienceComponent],
    declarations:
    [
        ExperienceComponent,
        ExperiencePositionComponent,
        ExperienceSkillsComponent
    ],
    providers: [ContactService],
})
export class ExperienceModule { }
