import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactHeadingComponent } from './contact-heading/contact-heading.component';
import { ContactComponent } from './contact.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';

import { SharedModule } from 'app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ContactHeadingComponent, 
    ContactComponent,
    ContactDetailComponent],
  exports: [ContactComponent]
})
export class ContactModule { }
