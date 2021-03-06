import { Component } from '@angular/core';
import { ContactDbModel } from '../shared/database/models/contact-db.model';
import { db } from '../shared/database/db';

@Component({
    moduleId: module.id,
    selector: 'contact-summary',
    templateUrl: 'contact-summary.component.html',
    styleUrls: ['contact-summary.component.css']
})
export class ContactSummaryComponent {
    private summary: ContactDbModel;
    constructor() {
        db.contact.get(1).then(res => this.summary = res);
    }
}
