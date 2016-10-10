import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';

import { ContactModule } from './contact/contact.module';
import { ExperienceModule } from './experience/experience.module';
import { EducationModule } from './education/education.module';
import { DatabaseService } from './shared/database/db.service';

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
