import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionPostComponent } from './seccion-post.component';

describe('SeccionPostComponent', () => {
  let component: SeccionPostComponent;
  let fixture: ComponentFixture<SeccionPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeccionPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeccionPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
