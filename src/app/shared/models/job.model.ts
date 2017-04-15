import { ReferenceModel } from './reference-code.model';

export interface JobModel {
    position: string;
    company: string;
    start: string;
    end: string;
    responsibilities: string;
    languages: ReferenceModel[];
    frameworks: ReferenceModel[];
    methodologies: ReferenceModel[];
}