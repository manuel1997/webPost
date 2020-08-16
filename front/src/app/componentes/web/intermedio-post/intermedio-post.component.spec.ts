import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntermedioPostComponent } from './intermedio-post.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule} from '@angular/common/http/testing';

describe('IntermedioPostComponent', () => {
  let component: IntermedioPostComponent;
  let fixture: ComponentFixture<IntermedioPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule,HttpClientTestingModule],
      declarations: [ IntermedioPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntermedioPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
