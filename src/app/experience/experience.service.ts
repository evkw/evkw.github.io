import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { JobModel } from 'app/shared/models/job.model';

@Injectable()
export class ExperienceService {

  constructor(private http: Http) { }

  getJobList(): Observable<JobModel[]> {
    return this.http.get('assets/job-experience.json')
      .map((result: Response) => <JobModel[]>result.json());
  }

}
