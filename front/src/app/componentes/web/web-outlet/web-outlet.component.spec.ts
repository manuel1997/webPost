import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebOutletComponent } from './web-outlet.component';
import {WebNavbarComponent} from '../web-navbar/web-navbar.component';
import {FooterComponent} from '../footer/footer.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';


describe('WebOutletComponent', () => {
  let component: WebOutletComponent;
  let fixture: ComponentFixture<WebOutletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
       imports: [RouterTestingModule,HttpClientTestingModule,FormsModule],
      declarations: [ WebOutletComponent,WebNavbarComponent,FooterComponent]
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
