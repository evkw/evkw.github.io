import { Component, OnDestroy } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { EducationService } from '../education/education.service';
import { Profile } from '../shared/models/codeschool.model';

@Component({
    moduleId: module.id,
    selector: 'edu-codeschool',
    templateUrl: 'education-codeschool.component.html',
    styleUrls: ['education-codeschool.component.css']
})
export class EducationCodeSchoolComponent implements OnDestroy {
    private subscription: Subscription;
    private profile: Profile;

    constructor(private educationService: EducationService) {
        this.subscription = this.educationService
            .getCodeSchoolInfo()
            .subscribe(res => this.profile = res)
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
     }
}