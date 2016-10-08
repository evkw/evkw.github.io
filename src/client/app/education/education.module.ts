import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EducationComponent } from './education.component';
import { EducationUniversityComponent } from '../education-university/education-university.component';
import { EducationService } from './education.service';

@NgModule({
    imports: [CommonModule],
    exports:
    [
        EducationComponent
    ],
    declarations:
    [
        EducationComponent,
        EducationUniversityComponent
    ],
    providers: [
        EducationService
    ],
})
export class EducationModule { }
