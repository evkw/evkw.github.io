import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { ContactModule } from './contact/contact.module';
import { ExperienceModule } from './experience/experience.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

    // Feature Modules
    ContactModule,
    ExperienceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
