import { Component } from '@angular/core';
import { Social } from '../shared/models/contact.model';
import { db } from '../shared/database/db';

@Component({
    moduleId: module.id,
    selector: 'contact-social',
    templateUrl: 'contact-social.component.html',
    styleUrls: ['contact-social.component.css']
})
export class ContactSocialComponent {

    private social: Social;
    constructor() {
        db.social.get(1).then(res => this.social = res);
    }
}