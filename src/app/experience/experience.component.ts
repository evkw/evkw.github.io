import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { JobModel } from 'app/shared/models/job.model';
import { ExperienceService } from './experience.service';

@Component({
  selector: 'resume-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  public jobs: Observable<JobModel[]>;
  constructor(private expSvc: ExperienceService) { }

  ngOnInit() {
    this.jobs = this.expSvc.getJobList();
  }

}
