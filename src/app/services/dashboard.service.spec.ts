import { TestBed, inject } from '@angular/core/testing';

import { DashboardService } from './dashboard.service';
import { HttpClient } from '../models/http.client';

describe('DashboardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClient],
      providers: [DashboardService]
    });
  });

  it('should be created', inject([DashboardService], (service: DashboardService) => {
    expect(service).toBeTruthy();
  }));
});
