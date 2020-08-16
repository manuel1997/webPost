import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaCategoriaComponent } from './vista-categoria.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule} from '@angular/common/http/testing';

describe('VistaCategoriaComponent', () => {
  let component: VistaCategoriaComponent;
  let fixture: ComponentFixture<VistaCategoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule,HttpClientTestingModule],
      declarations: [ VistaCategoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
