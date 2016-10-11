
import { Position } from '../../models/contact.model';

export class PositionDbModel {
    id: number;
    start: string;
    end: string;
    title: string;
    summary: string;
    name: string;

    constructor(pos: Position) {
        this.start = `${this.getMonth(pos.startDate.month)} ${pos.startDate.year}`;
        if (pos.endDate) {
            this.end = `${this.getMonth(pos.endDate.month)} ${pos.endDate.year}`;
        } else {
            this.end = 'Current';
        }
        this.title = pos.title;
        this.summary = pos.summary;
        this.name = pos.company.name;
    }


    getMonth(month: number) {
        switch (month) {
            case 1:
                return 'Jan';
            case 2:
                return 'Feb';
            case 3:
                return 'Mar';
            case 4:
                return 'Apr';
            case 5:
                return 'May';
            case 6:
                return 'Jun';
            case 7:
                return 'Jul';
            case 8:
                return 'Aug';
            case 9:
                return 'Sep';
            case 10:
                return 'Oct';
            case 11:
                return 'Nov';
            case 12:
                return 'Dec';
            default:
                return 'Jan';

        }
    }
}
