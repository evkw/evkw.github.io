import { Component, OnInit, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'experience-skills',
    templateUrl: 'experience-skills.component.html'
})
export class ExperienceSkillsComponent implements OnInit {
    @Input() skills: any;
    constructor() { }

    ngOnInit() { }
}