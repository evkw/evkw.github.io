import { Position } from '../../models/contact.model';

export class PastPositionDbModel {
    id: number;
    startMonth: number;
    startYear: number;
    endMonth: number;
    endYear: number;
    title: string;
    summary: string;

    constructor(pos: Position) {
        this.startMonth = pos.startDate.month;
        this.startYear = pos.startDate.year;
        if (pos.endDate) {
            this.endMonth = pos.endDate.month;
            this.endYear = pos.endDate.year;
        }
        this.title = pos.title;
        this.summary = pos.summary;
    }
}