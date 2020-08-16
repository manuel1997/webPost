import { TestBed } from '@angular/core/testing';

import { WebService } from './web.service';
import { HttpClientTestingModule} from '@angular/common/http/testing';

describe('WebService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: WebService = TestBed.get(WebService);
    expect(service).toBeTruthy();
  });
});
