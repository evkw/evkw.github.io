import { Component, OnInit, Input, OnDestroy } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { Contact } from '../contact/contact.model';

@Component({
    moduleId: module.id,
    selector: 'contact-details',
    templateUrl: 'contact-details.component.html',
    styleUrls: ['contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit, OnDestroy {

    @Input() contact: Observable<Contact>;
    private details: Contact;
    private subscription: Subscription;

    ngOnInit() {
        this.subscription = this.contact.subscribe(res => this.details = res);
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}