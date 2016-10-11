import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

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
            email: ['', this.validateEmail],
            message: ['', Validators.required],
            name: ['', Validators.required]
        });
    }

    validateEmail(control: FormControl) {
    let regex = new RegExp('([a-z0-9._%+-])+@([a-z0-9.-])+.([a-z])');
    return regex.test(control.value) ? null : { 'validateEmail': true };
  }

  submitForm() {
      console.log(this.formGroup.value);
      alert(`Thanks for the message ${this.formGroup.value.name}`);
  }
}
