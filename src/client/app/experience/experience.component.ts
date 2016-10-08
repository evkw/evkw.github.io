import { Component, OnInit, OnDestroy } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { ContactService } from '../contact/contact.service';
import { Contact } from '../shared/models/contact.model';

@Component({
    moduleId: module.id,
    selector: 'experience-column',
    templateUrl: 'experience.component.html',
    styleUrls: ['experience.component.css']
})
export class ExperienceComponent implements OnDestroy {

    private contact: Contact;
    private subscription: Subscription;

    constructor(private contactService: ContactService) {
        this.subscription = this.contactService
            .getContactInfo()
            .subscribe(res => this.contact = res);
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}