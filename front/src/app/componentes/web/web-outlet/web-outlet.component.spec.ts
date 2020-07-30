import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebOutletComponent } from './web-outlet.component';

describe('WebOutletComponent', () => {
  let component: WebOutletComponent;
  let fixture: ComponentFixture<WebOutletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebOutletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebOutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
