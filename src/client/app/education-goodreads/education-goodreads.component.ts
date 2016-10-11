import { Component } from '@angular/core';
import { db } from '../shared/database/db';
import { BookModel } from '../shared/models/goodreads.model';

@Component({
    moduleId: module.id,
    selector: 'edu-goodreads',
    templateUrl: 'education-goodreads.component.html',
    styleUrls: ['../app.component.css', 'education-goodreads.component.css']
})
export class EducationGoodReadsComponent {
    private books: BookModel[];
    constructor() {
        db.books.toArray(res => this.books = res);
    }
}
