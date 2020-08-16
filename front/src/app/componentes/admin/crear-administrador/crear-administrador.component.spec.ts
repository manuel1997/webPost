import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearAdministradorComponent } from './crear-administrador.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';

describe('CrearAdministradorComponent', () => {
  let component: CrearAdministradorComponent;
  let fixture: ComponentFixture<CrearAdministradorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule,HttpClientTestingModule,FormsModule],
      declarations: [ CrearAdministradorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearAdministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
