import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { Contact } from '../shared/models/contact.model';

@Component({
    moduleId: module.id,
    selector: 'contact-summary',
    templateUrl: 'contact-summary.component.html',
    styleUrls: ['contact-summary.component.css']
})
export class ContactSummaryComponent implements OnInit, OnDestroy {

    @Input() contact: Observable<Contact>;
    private summary: Contact;
    private subscription: Subscription;

    ngOnInit() { 
        this.subscription = this.contact.subscribe(res => this.summary = res);
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}