import { Component } from '@angular/core';
import './operators';
import { DatabaseService } from './shared/database/db.service';


@Component({
  moduleId: module.id,
  selector: 'sd-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})

export class AppComponent {
  private loadingComplete = false;
  constructor(private databaseService: DatabaseService) {
    if (navigator.onLine) {
      databaseService.deleteDb();
      databaseService.reloadDb()
        .subscribe(complete => this.loadingComplete = complete);
    }
  }
}
