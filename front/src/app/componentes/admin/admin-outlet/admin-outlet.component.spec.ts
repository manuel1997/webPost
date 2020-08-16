import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminOutletComponent } from './admin-outlet.component';
import {AdminNavbarComponent} from '../admin-navbar/admin-navbar.component'
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule} from '@angular/common/http/testing';

describe('AdminOutletComponent', () => {
  let component: AdminOutletComponent;
  let fixture: ComponentFixture<AdminOutletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule,HttpClientTestingModule],
      declarations: [ AdminOutletComponent,AdminNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminOutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
