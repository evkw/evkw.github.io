import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { db } from './db';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import * as Rx from 'rxjs/Rx';

import { ContactDbModel } from './models/contact-db.model';
import { UniversityDbModel } from './models/university-db.model';
import { SkillDbModel } from './models/skill-db.model';
import { PositionDbModel } from './models/position-db.model';

import { Contact, Social } from '../models/contact.model';
import { Profile } from '../models/codeschool.model';
import { GoodReadsReview, BookModel } from '../models/goodreads.model';

@Injectable()
export class DatabaseService {

    constructor(private http: Http) { }

    deleteDb() {
        db.delete();
    }

    reloadDb() {
        db.open();
    }

    waitForComplete() {
        return Rx.Observable.combineLatest(
            this.getContactForDb(),
            this.getSocialForDb(),
            this.getCodeSchoolforDb(),
            this.getGoodReadBooksForDb(),
            (contact, social, codeschool, goodreads) => {
                if (contact && social && codeschool && goodreads) {
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

    private extractCurrentPositions(contact: Contact): PositionDbModel[] {
        let returnValue: PositionDbModel[] = [];
        contact.threeCurrentPositions.values.forEach(x => {
            returnValue.push(new PositionDbModel(x));
        });
        return returnValue;
    }

    private extractPastPositions(contact: Contact): PositionDbModel[] {
        let returnValue: PositionDbModel[] = [];
        contact.threePastPositions.values.forEach(x => {
            returnValue.push(new PositionDbModel(x));
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
                db.completed_courses.bulkAdd(res.courses.completed);
                db.badges.bulkAdd(res.badges);
            })
            .map(res => true);
    }

    private getGoodReadBooksForDb(): Rx.Observable<boolean> {
        return this.http.get('../../../assets/goodreads.json')
            .map(res => <GoodReadsReview[]>res.json().reviews.review)
            .do(res => {
                db.books.bulkAdd(this.extractBookFromReview(res));
            })
            .map(res => true);
    }

    private extractBookFromReview(reviews: GoodReadsReview[]): BookModel[] {
        let returnValue: BookModel[] = [];
        reviews.forEach(x => {
            returnValue.push(new BookModel(x));
        });
        return returnValue;
    }

}
