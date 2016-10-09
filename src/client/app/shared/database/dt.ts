
import { Contact, 
    SkillDetails } from '../models/contact.model';
import { Profile } from '../models/codeschool.model';

import Dexie from 'dexie';

class AppDb extends Dexie {
    contact: Dexie.Table<Contact, number>;
    skills: Dexie.Table<SkillDetails, number>;
    codeschool: Dexie.Table<Profile, number>;


    constructor() {
        super('AppDb');
        this.version(1).stores({
            contact: 'id++, emailAddress, firstName, lastName, phone, website, summary',
            skills: 'id++, name',

        })
    }
}