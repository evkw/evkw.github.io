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
    educations: Educations;
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
    startDate: Date;
    endDate: Date;
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

export interface Social {
    facebook: string;
    github: string;
    twitter: string;
}

export interface Educations {
    _total: number;
    values: Education[];
}

export interface Education {
    degree: string;
    endDate: Date;
    fieldOfStudy: string;
    grade: any;
    id: number;
    schoolName: string;
    startDate: Date;
}
