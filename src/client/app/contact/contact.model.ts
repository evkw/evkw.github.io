export interface Contact {
    emailAddress: string;
    firstName: string;
    lastName: string;
    location: Location;
    phone: string;
    website: string;
    skills: ContactSkills;
    summary: string;
    threeCurrentPositions: CurrentPositions;
    threePastPositions: PastPositions;
}

export interface Location {
    country: ContactLocationCountry;
    name: string;
}

export interface ContactLocationCountry {
    code: string;
}

export interface ContactSkills {
    _total: number;
    values: Skill[];
}

export interface Skill {
    id: number;
    skill: SkillDetails;
}

export interface SkillDetails {
    name: string;
}

export interface CurrentPositions {
    _total: number;
    values: Position[];
}

export interface PastPositions {
    _total: number;
    values: Position[];
}

export interface Position {
    company: Company;
    id: string;
    isCurrent: boolean;
    location: Location;
    startDate: Date
    summary: string;
    title: string;
}

export interface Company {
    id: number;
    name: string;
}

export interface Date {
    month: number;
    year: number;
}
