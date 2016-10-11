import { Component } from '@angular/core';
import { ContactDbModel } from '../shared/database/models/contact-db.model';
import { db } from '../shared/database/db';

@Component({
    moduleId: module.id,
    selector: 'contact-logo',
    templateUrl: 'contact-logo.component.html',
    styleUrls: ['contact-logo.component.css']
})
export class ContactLogoComponent {
    private logo: ContactDbModel;
    constructor() {
        db.contact.get(1).then(res => this.logo = res);
    }
}
