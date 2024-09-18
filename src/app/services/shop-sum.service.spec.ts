import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ShopSumService } from './shop-sum.service';

describe('ShopSumService', () => {
  let service: ShopSumService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(ShopSumService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
