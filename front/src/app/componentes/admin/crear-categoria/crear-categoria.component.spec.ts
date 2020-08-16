import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearCategoriaComponent } from './crear-categoria.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';

describe('CrearCategoriaComponent', () => {
  let component: CrearCategoriaComponent;
  let fixture: ComponentFixture<CrearCategoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule,HttpClientTestingModule,FormsModule],
      declarations: [ CrearCategoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
