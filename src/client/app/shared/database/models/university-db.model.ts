import { Education } from '../../models/contact.model';

export class UniversityDbModel {
    id: number;
    degree: string;
    endDate: number;
    fieldOfStudy: string;
    schoolName: string;

    constructor(uni: Education) {
        this.degree = uni.degree;
        this.endDate = uni.endDate.year;
        this.fieldOfStudy = uni.fieldOfStudy;
        this.schoolName = uni.schoolName;
    }
}
