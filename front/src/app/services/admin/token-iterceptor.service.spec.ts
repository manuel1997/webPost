import { TestBed } from '@angular/core/testing';

import { TokenIterceptorService } from './token-iterceptor.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule} from '@angular/common/http/testing';

describe('TokenIterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule,HttpClientTestingModule],
  }));

  it('should be created', () => {
    const service: TokenIterceptorService = TestBed.get(TokenIterceptorService);
    expect(service).toBeTruthy();
  });
});
