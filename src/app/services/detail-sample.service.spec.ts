import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { DetailSampleService } from './detail-sample.service';

describe('DetailSampleService', () => {
  let service: DetailSampleService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(DetailSampleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
