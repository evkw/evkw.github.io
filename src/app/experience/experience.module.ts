import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperienceComponent } from './experience.component';

import { SharedModule } from 'app/shared/shared.module';
import { ExperienceService } from './experience.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [ExperienceComponent],
  exports: [ExperienceComponent],
  providers: [ExperienceService]
})
export class ExperienceModule { }
