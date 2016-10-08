import { Component } from '@angular/core';
import * as Rx from 'rxjs/Rx';

import { ContactService } from './contact.service';
import { Contact } from '../shared/models/contact.model';

@Component({
    moduleId: module.id,
    selector: 'contact-column',
    templateUrl: 'contact.component.html',
    styleUrls: ['contact.component.css']
})
export class ContactComponent {
    public contactObservable: Rx.Observable<Contact>;

    constructor(private contactService: ContactService) {
        this.contactObservable = this.contactService.getContactInfo();
    }
}