import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

import { ContactModule } from './contact/contact.module';
import { ExperienceModule } from './experience/experience.module';
import { EducationModule } from './education/education.module';
import { DatabaseService } from './shared/database/db.service';
import { FormComponent } from './form/form.component';
import { LoadingComponent } from './db-loading/db-loading.component';
import { routes } from './app.routing';
import { ResumeComponent } from './resume/resume.component';

@NgModule({
  imports:
  [
    BrowserModule,
    HttpModule,
    ContactModule,
    ExperienceModule,
    EducationModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [AppComponent, FormComponent, LoadingComponent, ResumeComponent],
  providers:
  [{
    provide: APP_BASE_HREF,
    useValue: '<%= APP_BASE %>'
  },
    DatabaseService
  ],
  bootstrap: [AppComponent]

})

export class AppModule { }
