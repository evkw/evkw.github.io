import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EducationComponent } from './education.component';
import { EducationUniversityComponent } from '../education-university/education-university.component';
import { EducationCodeSchoolComponent } from '../education-codeschool/education-codeschool.component';
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
        EducationUniversityComponent,
        EducationCodeSchoolComponent
    ],
    providers: [
        EducationService
    ],
})
export class EducationModule { }
