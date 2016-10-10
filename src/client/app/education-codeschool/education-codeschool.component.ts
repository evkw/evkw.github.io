import { Component } from '@angular/core';
import { Course, CodeSchoolUser } from '../shared/models/codeschool.model';
import { db } from '../shared/database/db';

@Component({
    moduleId: module.id,
    selector: 'edu-codeschool',
    templateUrl: 'education-codeschool.component.html',
    styleUrls: ['education-codeschool.component.css']
})
export class EducationCodeSchoolComponent {
    private codeSchoolUser: CodeSchoolUser;
    private courses: Course[] = [];

    constructor() {
        db.codeschool.get(1).then(res => this.codeSchoolUser = res);
        db.completed_courses.toArray(res => this.courses = res);
    }
}