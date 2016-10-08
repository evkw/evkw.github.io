import { Component, OnDestroy } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { EducationService } from '../education/education.service';
import { Educations } from '../shared/models/contact.model';

@Component({
    moduleId: module.id,
    selector: 'education-university',
    templateUrl: 'education-university.component.html'
})
export class EducationUniversityComponent implements OnDestroy {
    private subscription: Subscription;
    private education: Educations;

    constructor(private educationService: EducationService) {
        this.subscription = this.educationService
            .getUniversityInfo()
            .subscribe(res => this.education = res);
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}