import { Component } from '@angular/core';
import './operators';
import { DatabaseService } from './shared/database/db.service';
import { db } from './shared/database/db';

@Component({
  moduleId: module.id,
  selector: 'sd-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})

export class AppComponent {
  private loadingComplete = false;
  constructor(private databaseService: DatabaseService) {
    console.log(navigator.onLine);
    if (navigator.onLine) {
      db.close();
      db.open();
      databaseService.waitForComplete()
        .subscribe(complete => this.loadingComplete = complete);
    } else {
      let test = db;
      console.log('got here!');
      this.loadingComplete = true;
    }
  }
}
