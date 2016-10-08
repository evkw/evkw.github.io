import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';

import { ContactModule } from './contact/contact.module';
import { ExperienceModule } from './experience/experience.module';
import { EducationModule } from './education/education.module';

@NgModule({
  imports:
  [
    BrowserModule,
    HttpModule,
    ContactModule,
    ExperienceModule,
    EducationModule
  ],
  declarations: [AppComponent],
  providers: [{
    provide: APP_BASE_HREF,
    useValue: '<%= APP_BASE %>'
  }],
  bootstrap: [AppComponent]

})

export class AppModule { }
