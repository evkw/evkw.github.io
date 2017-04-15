import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleCardComponent } from './title-card/title-card.component';
import { CardBodyComponent } from './card-body/card-body.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TitleCardComponent, CardBodyComponent],
  exports: [TitleCardComponent, CardBodyComponent]
})
export class SharedModule { }
