import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactService } from './contact.service';
import { ContactComponent } from './contact.component';
import { ContactDetailsComponent } from '../contact-details/contact-details.component';
import { ContactLogoComponent } from '../contact-logo/contact-logo.component';
import { ContactSocialComponent } from '../contact-social/contact-social.component';
import { ContactSummaryComponent } from '../contact-summary/contact-summary.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations:
    [
        ContactComponent,
        ContactDetailsComponent,
        ContactLogoComponent,
        ContactSocialComponent,
        ContactSummaryComponent
    ],
    exports: [
        ContactComponent
    ],
    providers: [
        ContactService
    ]
})
export class ContactModule { }
