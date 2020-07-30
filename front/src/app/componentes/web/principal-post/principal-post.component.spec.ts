import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalPostComponent } from './principal-post.component';

describe('PrincipalPostComponent', () => {
  let component: PrincipalPostComponent;
  let fixture: ComponentFixture<PrincipalPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrincipalPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipalPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
