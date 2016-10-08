import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Profile } from '../shared/models/codeschool.model';
import { Contact } from '../shared/models/contact.model';

@Injectable()
export class EducationService {

    constructor(private http: Http) { }

    getCodeSchoolInfo() {
       return this.http.get('../assets/codeschool.json')
        .map(res => <Profile>res.json());
    }

    getUniversityInfo() {
        return this.http.get('../assets/linkedin.json')
        .map(res => <Contact>res.json())
        .map(res => res.educations);
    }

    getGoodReadsInfo() {

    }
    
}