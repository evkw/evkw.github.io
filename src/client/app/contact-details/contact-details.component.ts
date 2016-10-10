import { Component } from '@angular/core';
import { ContactDbModel } from '../shared/database/models/contact-db.model';
import { db } from '../shared/database/db';

@Component({
    moduleId: module.id,
    selector: 'contact-details',
    templateUrl: 'contact-details.component.html',
    styleUrls: ['contact-details.component.css']
})
export class ContactDetailsComponent {
    private details: ContactDbModel;
    constructor() {
        db.contact.get(1).then(res => this.details = res);
    }
}