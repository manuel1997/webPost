import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionPostComponent } from './seccion-post.component';
import {PrincipalPostComponent} from '../principal-post/principal-post.component';
import {IntermedioPostComponent} from '../intermedio-post/intermedio-post.component';
import {FinalPostComponent} from '../final-post/final-post.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule} from '@angular/common/http/testing';


describe('SeccionPostComponent', () => {
  let component: SeccionPostComponent;
  let fixture: ComponentFixture<SeccionPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule,HttpClientTestingModule],
      declarations: [ SeccionPostComponent,PrincipalPostComponent,IntermedioPostComponent,FinalPostComponent]
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
