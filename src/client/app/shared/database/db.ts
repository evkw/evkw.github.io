import { ContactDbModel } from './models/contact-db.model';
import { SkillDbModel } from './models/skill-db.model';
import { UniversityDbModel } from './models/university-db.model';
import { PositionDbModel } from './models/position-db.model';
import { Social } from '../models/contact.model';
import { Badge, CodeSchoolUser, Course} from '../models/codeschool.model';

import Dexie from 'dexie';

class AppDb extends Dexie {
    contact: Dexie.Table<ContactDbModel, number>;
    skills: Dexie.Table<SkillDbModel, number>;
    university: Dexie.Table<UniversityDbModel, number>;
    social: Dexie.Table<Social, number>;
    current_positions: Dexie.Table<PositionDbModel, number>;
    past_positions: Dexie.Table<PositionDbModel, number>;
    codeschool: Dexie.Table<CodeSchoolUser, number>;
    completed_courses: Dexie.Table<Course, number>;
    in_progress_courses: Dexie.Table<Course, number>;
    badges: Dexie.Table<Badge, number>;

    constructor() {
        super('AppDb');
        this.version(1).stores({
            contact: 'id++, emailAddress, firstName, lastName, phone, website, summary, location',
            skills: 'id++, name',
            university: 'id++, degree, endDate, fieldOfStudy, schoolName',
            social: 'id++, facebook, github, twitter',
            current_positions: 'id++, name, start, end, title, summary',
            past_positions: 'id++, name, start, end, title, summary',
            codeschool: 'id++, username, total_score, avatar',
            completed_courses: 'id++, title, url, badge',
            in_progress_courses: 'id++, title, url, badge',
            badges: 'id++, name, badge, course_url'
        });
    }
}

export var db = new AppDb();
