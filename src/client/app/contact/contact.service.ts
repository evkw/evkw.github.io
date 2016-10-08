import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Contact, Social } from './contact.model';

@Injectable()
export class ContactService {

    constructor(private http: Http) { }

    getContactInfo() {
      return this.http.get('../assets/linkedin.json')
        .map(res => <Contact>res.json());
    }

    getSocialInfo() {
        return this.http.get('../assets/social.json')
        .map(res => <Social>res.json());
    }
}