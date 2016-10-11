import { Skill } from '../../models/contact.model';

export class SkillDbModel {
    id: number;
    name: string;

    constructor(skill: Skill) {
        this.name = skill.skill.name;
    }
}
