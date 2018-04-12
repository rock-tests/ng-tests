import { TestBed, inject } from '@angular/core/testing';

import { WithDeptsService } from './with-depts.service';
import { ApiService } from '../../shared';
import { SingleService } from './singleService';

describe('WithDeptsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SingleService,
        WithDeptsService
      ]
    });
  });

  it('should be created', inject([WithDeptsService], (service: WithDeptsService) => {
    expect(service).toBeTruthy();
  }));
});
