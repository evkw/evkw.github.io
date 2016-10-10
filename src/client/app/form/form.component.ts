import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

let $ = require('jquery');

@Component({
    moduleId: module.id,
    selector: 'contact-form',
    templateUrl: 'form.component.html',
    styleUrls: ['../app.component.css']
})
export class FormComponent {
    private formGroup: FormGroup;
    constructor(private fb: FormBuilder) { 
        this.formGroup = fb.group({
            subject: ['', Validators.required],
            email: ['', Validators.required],
            message: ['', Validators.required],
            name: ['', Validators.required]
        })
    }
}