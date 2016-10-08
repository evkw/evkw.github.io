import { Component, Input, OnInit, OnDestroy } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { Contact } from '../shared/models/contact.model';

@Component({
    moduleId: module.id,
    selector: 'contact-logo',
    templateUrl: 'contact-logo.component.html',
    styleUrls: ['contact-logo.component.css']
})
export class ContactLogoComponent implements OnInit, OnDestroy {

    @Input() contact: Observable<Contact>;
    private logo: Contact;
    private subscription: Subscription;

    ngOnInit() {
        this.subscription = this.contact.subscribe(res => this.logo = res);
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}