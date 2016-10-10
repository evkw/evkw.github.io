import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { db } from './db';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import * as Rx from 'rxjs/Rx';

import { ContactDbModel } from './models/contact-db.model';
import { UniversityDbModel } from './models/university-db.model';
import { SkillDbModel } from './models/skill-db.model';
import { CurrentPositionDbModel } from './models/current-position-db.model';
import { PastPositionDbModel } from './models/past-position-db.model';

import { Contact, Social } from '../models/contact.model';
import { Profile } from '../models/codeschool.model';

@Injectable()
export class DatabaseService {

    constructor(private http: Http) { }

    deleteDb() {
        db.delete();
    }

    reloadDb() {
        db.open();
        return Rx.Observable.combineLatest(
            this.getContactForDb(),
            this.getSocialForDb(),
            this.getCodeSchoolforDb(),
            (contact, social, codeschool) => {
                if (contact && social && codeschool) {
                    return true;
                }
                return false;
            }
        );
    }

    public getContactForDb(): Rx.Observable<boolean> {
        return this.http.get('../../../assets/linkedin.json')
            .map(res => <Contact>res.json())
            .map(res => {
                db.contact.add(new ContactDbModel(res));
                db.university.bulkAdd(this.extractUniversities(res));
                db.skills.bulkAdd(this.extractSkills(res));
                db.current_positions.bulkAdd(this.extractCurrentPositions(res));
                db.past_positions.bulkAdd(this.extractPastPositions(res));
            })
            .map(res => true);
    }

    private extractUniversities(contact: Contact): UniversityDbModel[] {
        let returnValue: UniversityDbModel[] = [];
        contact.educations.values.forEach(x => {
            returnValue.push(new UniversityDbModel(x));
        });
        return returnValue;
    }

    private extractSkills(contact: Contact): SkillDbModel[] {
        let returnValue: SkillDbModel[] = [];
        contact.skills.values.forEach(x => {
            returnValue.push(new SkillDbModel(x));
        });
        return returnValue;
    }

    private extractCurrentPositions(contact: Contact): CurrentPositionDbModel[] {
        let returnValue: CurrentPositionDbModel[] = [];
        contact.threeCurrentPositions.values.forEach(x => {
            returnValue.push(new CurrentPositionDbModel(x));
        });
        return returnValue;
    }

    private extractPastPositions(contact: Contact): PastPositionDbModel[] {
        let returnValue: PastPositionDbModel[] = [];
        contact.threePastPositions.values.forEach(x => {
            returnValue.push(new PastPositionDbModel(x));
        });
        return returnValue;
    }

    private getSocialForDb(): Rx.Observable<boolean> {
        return this.http.get('../../../assets/social.json')
            .map(res => <Social>res.json())
            .do(res => {
                db.social.add(res);
            })
            .map(res => true);
    }

    private getCodeSchoolforDb(): Rx.Observable<boolean> {
        return this.http.get('../../../assets/codeschool.json')
            .map(res => <Profile>res.json())
            .do(res => {
                db.codeschool.add(res.user);
                db.in_progress_courses.bulkAdd(res.courses.in_progress);
                db.completed_courses.bulkAdd(res.courses.completed)
                db.badges.bulkAdd(res.badges);
            })
            .map(res => true);
    }

}