import { Position } from '../../models/contact.model';

export class CurrentPositionDbModel {
    id: number;
    startMonth: number;
    startYear: number;
    title: string;
    summary: string;

    constructor(pos: Position) {
        this.startMonth = pos.startDate.month;
        this.startYear = pos.startDate.year;
        this.title = pos.title;
        this.summary = pos.summary;
    }
}