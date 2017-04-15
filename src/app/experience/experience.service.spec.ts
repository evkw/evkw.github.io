import { TestBed, inject } from '@angular/core/testing';

import { ExperienceService } from './experience.service';

describe('ExperienceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExperienceService]
    });
  });

  it('should ...', inject([ExperienceService], (service: ExperienceService) => {
    expect(service).toBeTruthy();
  }));
});
