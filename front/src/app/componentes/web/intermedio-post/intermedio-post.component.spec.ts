import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntermedioPostComponent } from './intermedio-post.component';

describe('IntermedioPostComponent', () => {
  let component: IntermedioPostComponent;
  let fixture: ComponentFixture<IntermedioPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
