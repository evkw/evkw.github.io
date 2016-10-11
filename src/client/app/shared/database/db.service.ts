import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { db } from './db';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

import { ContactDbModel } from './models/contact-db.model';
import { UniversityDbModel } from './models/university-db.model';
import { SkillDbModel } from './models/skill-db.model';
import { PositionDbModel } from './models/position-db.model';

import { Contact, Social } from '../models/contact.model';
import { Profile } from '../models/codeschool.model';
import { GoodReadsReview, BookModel } from '../models/goodreads.model';

@Injectable()
export class DatabaseService {

    loadingStatus: LoadingStatus = new LoadingStatus();

    constructor(private http: Http) { }

    deleteDb() {
        console.log('Deleting Database');
        db.delete();
        db.open();
    }

    reloadDb() {
        console.log('Re-openning Database');
        db.open().then(() => {
            this.getSocialForDb();
            this.getCodeSchoolforDb();
            this.getContactForDb();
            this.getGoodReadBooksForDb();
        });
    }

    public getContactForDb() {
        this.http.get('../../../assets/linkedin.json')
            .map(res => <Contact>res.json())
            .subscribe(res => {
                db.contact.add(new ContactDbModel(res)).then(() => {
                    db.university.bulkAdd(this.extractUniversities(res));
                })
                    .then(() => db.skills.bulkAdd(this.extractSkills(res))
                        .then(() => db.current_positions.bulkAdd(this.extractCurrentPositions(res)))
                        .then(() => db.past_positions.bulkAdd(this.extractPastPositions(res)))
                        .then(() => this.loadingStatus.contactLoaded = true));
            });
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

    private getSocialForDb() {
        this.http.get('../../../assets/social.json')
            .map(res => <Social>res.json())
            .subscribe(res => {
                db.social.add(res)
                    .then(() => this.loadingStatus.socialLoaded = true);
            });
    }

    private getCodeSchoolforDb() {
        this.http.get('../../../assets/codeschool.json')
            .map(res => <Profile>res.json())
            .subscribe(res => {
                db.codeschool.add(res.user).then(() => db.in_progress_courses.bulkAdd(res.courses.in_progress))
                    .then(() => db.completed_courses.bulkAdd(res.courses.completed))
                    .then(() => db.badges.bulkAdd(res.badges))
                    .then(() => this.loadingStatus.codeschoolLoaded = true);
            });
    }

    private getGoodReadBooksForDb() {
        this.http.get('../../../assets/goodreads.json')
            .map(res => <GoodReadsReview[]>res.json().reviews.review)
            .subscribe(res => {
                db.books.bulkAdd(this.extractBookFromReview(res))
                    .then(() => this.loadingStatus.goodReadsLoaded = true);
            });
    }

    private extractBookFromReview(reviews: GoodReadsReview[]): BookModel[] {
        let returnValue: BookModel[] = [];
        reviews.forEach(x => {
            returnValue.push(new BookModel(x));
        });
        return returnValue;
    }

}

class LoadingStatus {
    contactLoaded: boolean;
    goodReadsLoaded: boolean;
    codeschoolLoaded: boolean;
    socialLoaded: boolean;

    allLoaded() {
        console.log(this);
        return this.contactLoaded &&
            this.goodReadsLoaded &&
            this.codeschoolLoaded &&
            this.socialLoaded;
    }
}
