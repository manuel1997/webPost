import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaCategoriaComponent } from './vista-categoria.component';

describe('VistaCategoriaComponent', () => {
  let component: VistaCategoriaComponent;
  let fixture: ComponentFixture<VistaCategoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
