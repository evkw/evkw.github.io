import { Component, OnInit, Input } from '@angular/core';
import * as Rx from 'rxjs/Rx';
import { Contact } from '../contact/contact.model';

@Component({
    moduleId: module.id,
    selector: 'contact-details',
    templateUrl: 'contact-details.component.html'
})
export class ContactDetailsComponent implements OnInit {
    @Input() contact: Rx.Observable<Contact>;

    constructor() { }

    ngOnInit() { }
}