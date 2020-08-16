import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebNavbarComponent } from './web-navbar.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';

describe('WebNavbarComponent', () => {
  let component: WebNavbarComponent;
  let fixture: ComponentFixture<WebNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule,HttpClientTestingModule,FormsModule],
      declarations: [ WebNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
