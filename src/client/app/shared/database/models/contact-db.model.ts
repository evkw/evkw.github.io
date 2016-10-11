import { Contact } from '../../models/contact.model';

export class ContactDbModel {
    id: number;
    emailAddress: string;
    firstName: string;
    lastName: string;
    phone: string;
    website: string;
    summary: string;
    location: string;

    constructor(contact: Contact) {
        this.emailAddress = contact.emailAddress;
        this.firstName = contact.firstName;
        this.lastName = contact.lastName;
        this.phone = contact.phone;
        this.website = contact.website;
        this.summary = contact.summary;
        this.location = contact.location.name;
    }
}
