import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPostComponent } from './editar-post.component';
import { FormsModule } from '@angular/forms';

describe('EditarPostComponent', () => {
  let component: EditarPostComponent;
  let fixture: ComponentFixture<EditarPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ EditarPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
