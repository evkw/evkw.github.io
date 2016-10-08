import { Component, OnInit, OnDestroy } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { ContactService } from '../contact/contact.service';
import { Social } from '../contact/contact.model';

@Component({
    moduleId: module.id,
    selector: 'contact-social',
    templateUrl: 'contact-social.component.html',
    styleUrls: ['contact-social.component.css']
})
export class ContactSocialComponent implements OnInit, OnDestroy {

    private social: Social;
    private subscription: Subscription;
    constructor(private contactService: ContactService) {
        this.subscription = this.contactService
            .getSocialInfo()
            .subscribe(res => this.social = res);
    }

    ngOnInit() { }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}